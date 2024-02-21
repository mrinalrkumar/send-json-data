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

  @Get('all')
  getHello(): DataItem[] {
    return this.appService.getHello();
  }

  @Get('leadSummary')
  getLeadSummary(): any {
    return this.appService.getLeadSummary();
  }

  @Get('fileSummary')
  getFileSummary(): any {
    return this.appService.getFileSummary();
  }

  @Get('disbSummary')
  getDisbSummary(): any {
    return this.appService.getDisbSummary();
  }

  @Get('querySummary')
  getQuerySummary(): any {
    return this.appService.getQuerySummary();
  }
}
