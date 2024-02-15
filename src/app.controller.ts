import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface DataItem {
  id: number;
  text: string;
  value: number;
}
@Controller('data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): DataItem[] {
    return this.appService.getHello();
  }
}
