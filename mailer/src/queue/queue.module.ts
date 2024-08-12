import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { QueueConsumer } from './queue.consumer';
import { QueueService } from './queue.service';

@Module({
  imports: [
    BullModule.registerQueue({
      connection: {
        host: 'localhost',
        port: 6379,
      },
      name: 'email',
    }),
  ],
  providers: [QueueConsumer, QueueService],
  exports: [QueueService],
})
export class QueueModule {}
