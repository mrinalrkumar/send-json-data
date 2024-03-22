import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DiarySummaryDTO, IdDto, UserInfoDto } from './dto/user-info.dto';
import { AttendanceDto } from './dto/attendance-info.dto';
import { LeadDto } from './dto/lead.dto';
import { CreateLeadDto } from './dto/create-lead.dto';

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

  @Post('lead')
  async modifyLead(@Body() leadDto: LeadDto): Promise<any> {
    return this.appService.modifyLead(leadDto);
  }

  @Post('leadSummary/id')
  async getLeadSummaryData(@Body() idDto: IdDto): Promise<any> {
    return this.appService.getLeadSummaryData(idDto);
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
    return this.appService.getAttendance(attendanceDto);
  }

  @Post('diarySummary')
  async getDiarySummary(@Body() diarySummaryDTO: DiarySummaryDTO): Promise<any> {
    return this.appService.getDiarySummary(diarySummaryDTO);
  }

  @Post('upcomingActivity')
  async getUpcomingActivity (@Body() userInfoDto: UserInfoDto): Promise<any> {
    return this.appService.getUpcomingActivity(userInfoDto)
  }

  @Post('createLead')
  async createLead (@Body() createLeadDto: CreateLeadDto): Promise<any> {
    return this.appService.createLead(createLeadDto)
  }
}
