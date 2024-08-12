import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Body() data: any): Promise<string> {
    return await this.appService.sendEmail(data.email, data.payload);
  }
}
