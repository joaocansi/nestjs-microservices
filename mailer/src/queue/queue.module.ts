import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { QueueConsumer } from './queue.consumer';
import { QueueService } from './queue.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'email',
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        connection: {
          host: config.get('bullmq_host'),
          port: config.get<number>('bullmq_port'),
        },
      }),
      inject: [ConfigService],
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          transport: {
            host: config.get('smtp_host'),
            secure: false,
            port: config.get<number>('smtp_host'),
            auth: {
              user: config.get('smtp_user'),
              pass: config.get('smtp_pass'),
            },
          },
          defaults: {
            from: config.get('smtp_from'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [QueueConsumer, QueueService],
  exports: [QueueService],
})
export class QueueModule {}
