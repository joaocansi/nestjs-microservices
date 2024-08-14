import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable } from '@nestjs/common';
import { EmailDto } from 'src/common/email';
import { MailerService } from '@nestjs-modules/mailer';

@Processor('email')
@Injectable()
export class QueueConsumer extends WorkerHost {
  constructor(private mailerService: MailerService) {
    super();
  }

  async process(job: Job<EmailDto, boolean, string>): Promise<void> {
    const { email, payload } = job.data;
    await this.mailerService.sendMail({
      to: email,
      subject: 'test',
      text: payload,
    });
    console.log('hello');
  }
}
