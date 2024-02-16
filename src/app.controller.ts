import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('leadSummary')
  getLeadSummary(): any {
    return this.appService.getLeadSummary();
  }
}
