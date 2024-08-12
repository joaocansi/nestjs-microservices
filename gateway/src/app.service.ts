import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MAILER_SERVICE') private mailerService: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.mailerService.connect();
  }

  async sendEmail(email: string, payload: string): Promise<string> {
    this.mailerService
      .send({ cmd: 'send_email' }, { email, payload })
      .subscribe();

    return 'success';
  }
}
