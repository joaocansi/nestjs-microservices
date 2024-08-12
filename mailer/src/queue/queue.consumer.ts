import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable } from '@nestjs/common';
import { EmailDto } from 'src/common/email';

@Processor('email')
@Injectable()
export class QueueConsumer extends WorkerHost {
  process(job: Job<EmailDto, boolean, string>): Promise<boolean> {
    const { email, payload } = job.data;
    console.log(email, payload);
    return Promise.resolve(false);
  }
}
