import { Module } from '@nestjs/common';
import { QueueModule } from './queue/queue.module';
import { MailController } from './app.controller';

@Module({
  imports: [QueueModule],
  controllers: [MailController],
})
export class AppModule {}
