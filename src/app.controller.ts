import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserInfoDto } from './dto/user-info.dto';
import { AttendanceDto } from './dto/attendance-info.dto';

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

  @Post('leadSummary')
  async getLeadSummary(@Body() userInfoDto: UserInfoDto): Promise<any> {
    return this.appService.getLeadSummary(userInfoDto);
  }

  @Post('fileSummary')
  async getFileSummary(@Body() userInfoDto: UserInfoDto): Promise<any> {
    return this.appService.getFileSummary(userInfoDto);
  }

  @Post('disbSummary')
  async getDisbSummary(@Body() userInfoDto: UserInfoDto): Promise<any> {
    return this.appService.getDisbSummary(userInfoDto);
  }

  @Post('querySummary')
  async getQuerySummary(@Body() userInfoDto: UserInfoDto): Promise<any> {
    return this.appService.getQuerySummary(userInfoDto);
  }

  @Post('sources')
  async getSources(@Body() userInfoDto: UserInfoDto): Promise<any> {
    return this.appService.getSources(userInfoDto);
  }

  @Post('attendance')
  async getAttendance(@Body() attendanceDto: AttendanceDto): Promise<any> {
    console.log(attendanceDto)
    return this.appService.getAttendance(attendanceDto);
  }

  @Post('diarySummary')
  async getDiarySummary(@Body() userInfoDto: UserInfoDto): Promise<any> {
    return this.appService.getDiarySummary(userInfoDto);
  }

  @Post('upcomingActivity')
  async getUpcomingActivity (@Body() userInfoDto: UserInfoDto): Promise<any> {
    return this.appService.getUpcomingActivity(userInfoDto)
  }
}
