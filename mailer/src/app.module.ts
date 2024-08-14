import { Module } from '@nestjs/common';
import { QueueModule } from './queue/queue.module';
import { MailController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    QueueModule,
  ],
  controllers: [MailController],
})
export class AppModule {}
