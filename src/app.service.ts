/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserInfoDto } from './dto/user-info.dto';
import { CouchBaseAdapterService } from './couch-base-adapter/couch-base-adapter.service';
import { Bucket, Cluster, Collection, QueryResult } from 'couchbase';
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

  getHello(): DataItem[] {
    return this.data;
  }

  async getLeadSummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT * FROM \`lead\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const leadData: QueryResult = await this.bucket.scope('database').query(query, options)
    return leadData.rows
  }

  async getFileSummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT * FROM \`file\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const fileData: QueryResult = await this.bucket.scope('database').query(query, options)
    const fileDataArray = fileData.rows.map(obj => obj.file);
    return fileDataArray
  }

  async getDisbSummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT * FROM \`disbursment\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const disbData: QueryResult = await this.bucket.scope('database').query(query, options)
    return disbData.rows
  }

  async getQuerySummary(userInfoDto: UserInfoDto): Promise<any> {
    const query = `SELECT * FROM \`query\` WHERE userId = $userId`;
    const options = { parameters: { userId: userInfoDto.userId } };
    const queryData: QueryResult = await this.bucket.scope('database').query(query, options)
    return queryData.rows
  }
}
