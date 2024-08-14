import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { EmailDto } from 'src/common/email';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('email') private emailQueue: Queue) {}

  async sendEmail(data: EmailDto) {
    this.emailQueue.add('email', data, {
      attempts: 2,
    });
  }
}
