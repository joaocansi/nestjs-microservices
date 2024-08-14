import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EmailDto } from 'src/common/email';
import { QueueService } from 'src/queue/queue.service';

@Controller()
export class MailController {
  constructor(private queueService: QueueService) {}

  @MessagePattern({ cmd: 'send_email' })
  sendEmail(data: EmailDto) {
    return this.queueService.sendEmail(data);
  }
}
