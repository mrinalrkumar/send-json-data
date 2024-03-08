/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserInfoDto } from './dto/user-info.dto';
import { CouchBaseAdapterService } from './couch-base-adapter/couch-base-adapter.service';
import { Bucket, Cluster, Collection, DocumentNotFoundError, QueryResult } from 'couchbase';
import { AttendanceDto } from './dto/attendance-info.dto';
import * as dayjs from "dayjs"
interface DataItem {
  id: number;
  text: string;
  value: number;
}

@Injectable()


export class AppService implements OnModuleInit {
  constructor(private couchBaseService: CouchBaseAdapterService){}
  private collection: Collection;
  private cluster: Cluster;
  private bucket: Bucket;
  async onModuleInit(): Promise<void> {
    this.cluster = await this.couchBaseService.connectDb();
    this.bucket = this.cluster.bucket('data-collection')
  }

  private readonly data: DataItem[] = [
    { id: 1, text: "ALL", value: 14 },
    { id: 2, text: "APPLICATION IN REVIEW", value: 228 },
    { id: 3, text: "DISBURSEMENT FIXED", value: 0 },
    { id: 4, text: "LEADS IN PROCESS", value: 9 },
    { id: 5, text: "ONLINE APPLICATIONS", value: 1 },
    { id: 6, text: "PARTIAL DISBURSEMENT", value: 96 },
    { id: 7, text: "PENDING QUERY", value: 446 },
    { id: 8, text: "PRE RHDFC", value: 0 },
    { id: 9, text: "PRE SANCTION", value: 521 },
    { id: 10, text: "SANCTION", value: 0 }
  ];

  private readonly diarySummary = [
    {
      "userId": "1234A",
      "date": dayjs(),
      "lead" : {
        "missed": "5",
        "achieved": "7"
      },
      "file" : {
        "missed": "4",
        "achieved": "7"
      },
      "disb" : {
        "missed": "1",
        "achieved": "7"
      },
      "query" : {
        "missed": "5",
        "achieved": "8"
      },
      "source": {
        "missed": "5",
        "achieved": "8"
      },
      "goal": {
        "missed": "5",
        "achieved": "8"
      },
      "upcomigActivity": {
        "time": "07/03/2024"
      }
    },
    {
      "userId": "1234M",
      "date": dayjs(),
      "lead" : {
        "missed": "5",
        "achieved": "7"
      },
      "file" : {
        "missed": "4",
        "achieved": "7"
      },
      "disb" : {
        "missed": "1",
        "achieved": "7"
      },
      "query" : {
        "missed": "5",
        "achieved": "8"
      },
      "source": {
        "missed": "8",
        "achieved": "8"
      },
      "goal": {
        "missed": "5",
        "achieved": "4"
      },
      "upcomigActivity": {
        "time": "07/03/2024"
      }
    }
  ];

  getHello(): DataItem[] {
    return this.data;
  }

  async getDiarySummary(userInfoDto: UserInfoDto): Promise<any> {
    const filteredData = this.diarySummary.filter((item) => item.userId === userInfoDto.userId);
    return filteredData
  }

  async getAttendance(attendanceDto: AttendanceDto): Promise<any> {
    return true
  }

  async getLeadSummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`lead\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const leadData: QueryResult = await this.bucket.scope('database').query(query, options)
    // console.log(leadData.rows)
    return leadData.rows
    // const leadDataArray = leadData.rows.map(obj => obj.lead);
    // if(leadData.rows===null){
    //   return DocumentNotFoundError
    // }
    // return leadDataArray
  }

  async getFileSummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`file\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const fileData: QueryResult = await this.bucket.scope('database').query(query, options)
    // console.log(fileData)
    return fileData.rows
    // const fileDataArray = fileData.rows.map(obj => obj.file);
    // return fileDataArray
  }

  async getSources(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`source\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    // console.log(userInfoDto)
    const sourceData: QueryResult = await this.bucket.scope('database').query(query, options)
    return sourceData.rows
    // const sourceDataArray = sourceData.rows.map(obj => obj.source);
    // return sourceDataArray
  }

  async getDisbSummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`disbursment\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const disbData: QueryResult = await this.bucket.scope('database').query(query, options)
    return disbData.rows
    // const disbDataArray = disbData.rows.map(obj => obj.disbursment);
    // return disbDataArray
  }

  async getQuerySummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT META().id as id, * FROM \`query\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const queryData: QueryResult = await this.bucket.scope('database').query(query, options)
    return queryData.rows
    // const queryDataArray = queryData.rows.map(obj => obj.query);
    // return queryDataArray
  }
}
