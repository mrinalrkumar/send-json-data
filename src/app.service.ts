/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable, OnModuleInit } from '@nestjs/common';
import { UserInfoDto } from './dto/user-info.dto';
import { CouchBaseAdapterService } from './couch-base-adapter/couch-base-adapter.service';
import {
  Bucket,
  Cluster,
  Collection,
  DocumentNotFoundError,
  QueryResult,
} from 'couchbase';
import { AttendanceDto } from './dto/attendance-info.dto';
import * as dayjs from 'dayjs';
interface DataItem {
  id: number;
  text: string;
  value: number;
}

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private couchBaseService: CouchBaseAdapterService) {}
  private collection: Collection;
  private cluster: Cluster;
  private bucket: Bucket;
  async onModuleInit(): Promise<void> {
    this.cluster = await this.couchBaseService.connectDb();
    this.bucket = this.cluster.bucket('data-collection');
  }

  private readonly data: DataItem[] = [
    { id: 1, text: 'ALL', value: 14 },
    { id: 2, text: 'APPLICATION IN REVIEW', value: 228 },
    { id: 3, text: 'DISBURSEMENT FIXED', value: 0 },
    { id: 4, text: 'LEADS IN PROCESS', value: 9 },
    { id: 5, text: 'ONLINE APPLICATIONS', value: 1 },
    { id: 6, text: 'PARTIAL DISBURSEMENT', value: 96 },
    { id: 7, text: 'PENDING QUERY', value: 446 },
    { id: 8, text: 'PRE RHDFC', value: 0 },
    { id: 9, text: 'PRE SANCTION', value: 521 },
    { id: 10, text: 'SANCTION', value: 0 },
  ];

  private readonly diarySummary = [
    {
      userId: '1234A',
      date: dayjs(),
      lead: {
        missed: '5',
        achieved: '7',
      },
      file: {
        missed: '4',
        achieved: '7',
      },
      disb: {
        missed: '1',
        achieved: '7',
      },
      query: {
        missed: '5',
        achieved: '8',
      },
      source: {
        missed: '5',
        achieved: '8',
      },
      goal: {
        missed: '5',
        achieved: '8',
      },
      upcomigActivity: {
        time: '07/03/2024',
      },
    },
    {
      userId: '1234M',
      date: dayjs(),
      lead: {
        missed: '5',
        achieved: '7',
      },
      file: {
        missed: '4',
        achieved: '7',
      },
      disb: {
        missed: '1',
        achieved: '7',
      },
      query: {
        missed: '5',
        achieved: '8',
      },
      source: {
        missed: '8',
        achieved: '8',
      },
      goal: {
        missed: '5',
        achieved: '4',
      },
      upcomigActivity: {
        time: '07/03/2024',
      },
    },
  ];

  private readonly upcomingActivity = [
    {
      userId: '1234A',
      activities: [
        {
          activityType: 'inPerson',
          description: 'Collect docs',
          createTime: '2024-03-10T06:12:39.880Z',
          status: 'open',
          geoLocation: {
            latitude: 28.48877777777778,
            longitude: 77.10308333333334,
          },
          planDateTime: '2024-03-11T16:12:39.880Z',
        },
        {
          activityType: 'call',
          description: 'salary',
          createTime: '2024-03-10T06:12:39.880Z',
          status: 'open',
          planDateTime: '2024-03-11T15:12:39.880Z',
        },
        {
          activityType: 'call',
          description: 'salary',
          createTime: '2024-03-09T06:12:39.880Z',
          status: 'open',
          planDateTime: '2024-03-10T15:12:39.880Z',
        },
        {
          activityType: 'inPerson',
          description: 'Collect docs',
          createTime: '2024-03-08T06:12:39.880Z',
          status: 'open',
          geoLocation: {
            latitude: 28.48877777777778,
            longitude: 77.10308333333334,
          },
          planDateTime: '2024-03-09T16:12:39.880Z',
        },
        {
          activityType: 'call',
          description: 'salary',
          createTime: '2024-03-08T06:12:39.880Z',
          status: 'open',
          planDateTime: '2024-03-09T15:12:39.880Z',
        }
      ],
    },
    {
      userId: '1234M',
      activities: [
        {
          activityType: 'inPerson',
          description: 'Collect salary slip',
          createTime: '2024-03-10T06:12:39.880Z',
          status: 'open',
          geoLocation: {
            latitude: 28.48877777777778,
            longitude: 77.10308333333334,
          },
          planDateTime: '2024-03-11T15:12:39.880Z',
        },
        {
          activityType: 'call',
          description: 'confirm details',
          createTime: '2024-03-10T06:12:39.880Z',
          status: 'open',
          planDateTime: '2024-03-11T14:12:39.880Z',
        },
        {
          activityType: 'call',
          description: 'salary',
          createTime: '2024-03-09T06:12:39.880Z',
          status: 'open',
          planDateTime: '2024-03-10T15:12:39.880Z',
        },
        {
          activityType: 'inPerson',
          description: 'Collect docs',
          createTime: '2024-03-08T06:12:39.880Z',
          status: 'open',
          geoLocation: {
            latitude: 28.48877777777778,
            longitude: 77.10308333333334,
          },
          planDateTime: '2024-03-09T16:12:39.880Z',
        },
        {
          activityType: 'call',
          description: 'salary',
          createTime: '2024-03-08T06:12:39.880Z',
          status: 'open',
          planDateTime: '2024-03-09T15:12:39.880Z',
        }
      ],
    }
  ];

  getHello(): DataItem[] {
    return this.data;
  }

  async getDiarySummary(userInfoDto: UserInfoDto): Promise<any> {
    const filteredData = this.diarySummary.filter(
      (item) => item.userId === userInfoDto.userId,
    );
    return filteredData;
  }

  async getUpcomingActivity(userInfoDto: UserInfoDto): Promise<any> {
    const filteredDate = this.upcomingActivity.filter(
      (item) => item.userId === userInfoDto.userId
    )

    return {
      statusCode: HttpStatus.OK,
      message: {
        id: 'Success',
        message: 'Data fetched successfully'
      },
      data: filteredDate[0]
    }
  }

  async getAttendance(attendanceDto: AttendanceDto): Promise<any> {
    return true;
  }

  async getLeadSummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`lead\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const leadData: QueryResult = await this.bucket
      .scope('database')
      .query(query, options);
    // console.log(leadData.rows)
    const transformedData = leadData.rows.map((item) => {
      return {
        id: item.id,
        applicationStatus: item.lead.applicationStatus,
        employmentType: item.lead.employmentType,
        leadDate: item.lead.leadDate,
        leadName: item.lead.leadName,
        leadNo: item.lead.leadNo,
        leadPhone: item.lead.leadPhone,
        leadProductType: item.lead.leadProductType,
        lmsCalling: item.lead.lmsCalling,
        meetingDate: item.lead.meetingDate,
        sourceType: item.lead.sourceType,
        statusDesc: item.lead.statusDesc,
        timestamp: item.lead.timestamp,
        userId: item.lead.userId,
      };
    });
    return transformedData;
    // const leadDataArray = leadData.rows.map(obj => obj.lead);
    // if(leadData.rows===null){
    //   return DocumentNotFoundError
    // }
    // return leadDataArray
  }

  async getFileSummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`file\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const fileData: QueryResult = await this.bucket
      .scope('database')
      .query(query, options);
    // console.log(fileData)
    const transformedData = fileData.rows.map((item) => {
      return {
        id: item.id,
        employmentType: item.file.employmentType,
        fileId: item.file.fileId,
        fileName: item.file.fileName,
        fileNo: item.file.fileNo,
        loanAmount: item.file.loanAmount,
        openQueries: item.file.openQueries,
        product: item.file.product,
        property: item.file.property,
        statusDesc: item.file.statusDesc,
        timestamp: item.file.timestamp,
        userId: item.file.userId,
      };
    });
    return transformedData;
    // const fileDataArray = fileData.rows.map(obj => obj.file);
    // return fileDataArray
  }

  async getSources(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`source\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    // console.log(userInfoDto)
    const sourceData: QueryResult = await this.bucket
      .scope('database')
      .query(query, options);
    const transformedData = sourceData.rows.map((item) => {
      return {
        id: item.id,
        availableUnits: item.source.availableUnits,
        employmentType: item.source.employmentType,
        keyPerson: item.source.keyPerson,
        sourceId: item.source.sourceId,
        sourceName: item.source.sourceName,
        status: item.source.status,
        statusDesc: item.source.statusDesc,
        timestamp: item.source.timestamp,
        userId: item.source.userId,
      };
    });
    return transformedData;
    // const sourceDataArray = sourceData.rows.map(obj => obj.source);
    // return sourceDataArray
  }

  async getDisbSummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`disbursment\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const disbData: QueryResult = await this.bucket
      .scope('database')
      .query(query, options);
    const transformedData = disbData.rows.map((item) => {
      return {
        id: item.id,
        disbAmt: item.disbursment.disbAmt,
        disbName: item.disbursment.disbName,
        disbNo: item.disbursment.disbNo,
        employmentType: item.disbursment.employmentType,
        fileNo: item.disbursment.fileNo,
        loanAmount: item.disbursment.loanAmount,
        openQueries: item.disbursment.openQueries,
        product: item.disbursment.product,
        property: item.disbursment.property,
        statusDesc: item.disbursment.statusDesc,
        timestamp: item.disbursment.timestamp,
        userId: item.disbursment.userId,
      };
    });
    return transformedData;
    // const disbDataArray = disbData.rows.map(obj => obj.disbursment);
    // return disbDataArray
  }

  async getQuerySummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`query\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const queryData: QueryResult = await this.bucket
      .scope('database')
      .query(query, options);
    const transformedData = queryData.rows.map((item) => {
      return {
        id: item.id,
        employmentType: item.query.employmentType,
        fileNo: item.query.fileNo,
        generated: item.query.generated,
        loanAmount: item.query.loanAmount,
        name: item.query.name,
        openQueries: item.query.openQueries,
        queryDesc: item.query.queryDesc,
        timestamp: item.query.timestamp,
        userId: item.query.userId,
      };
    });
    return transformedData;
    // const queryDataArray = queryData.rows.map(obj => obj.query);
    // return queryDataArray
  }
}
