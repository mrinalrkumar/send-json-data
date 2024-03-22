/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable, OnModuleInit } from '@nestjs/common';
import { DiarySummaryDTO, IdDto, UserInfoDto } from './dto/user-info.dto';
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
import { LeadDto } from './dto/lead.dto';
import { CreateLeadDto } from './dto/create-lead.dto';
import { start } from 'repl';
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
    { id: 0, text: 'SANCTION', value: 0 },
  ];

  private readonly diarySummary = [
    {
      userId: '1234A',
      date: dayjs(), //today's date
      huddleSummary: {
        huddleId: 'huddleBriefTitle',
        huddleCollection: [
          {
            title: 'Huddle1',
            desc: 'desc1',
          },
        ],
      },
      activitySummary: {
        activityType1: {
          id: 'activityType1',
          missed: '5',
          achieved: '7',
        },
        activityType2: {
          id: 'activityType2',
          missed: '4',
          achieved: '7',
        },
        activityType3: {
          id: 'activityType3',
          missed: '1',
          achieved: '7',
        },
        activityType4: {
          id: 'activityType4',
          missed: '5',
          achieved: '8',
        },
        activityType5: {
          id: 'activityType5',
          missed: '5',
          achieved: '8',
        },
        activityType6: {
          id: 'activityType6',
          missed: '5',
          achieved: '8',
        },
        activityType7: {
          //prospect
          id: 'activityType7',
          missed: '5',
          achieved: '4',
        },
      },
    },
    {
      userId: '1234A',
      date: dayjs().subtract(1, 'day'), //today's date
      huddleSummary: {
        huddleId: 'huddleBriefTitle',
        huddleCollection: [
          {
            title: 'Huddle2',
            desc: 'desc2',
          },
        ],
      },
      activitySummary: {
        activityType1: {
          id: 'activityType1',
          missed: '1',
          achieved: '7',
        },
        activityType2: {
          id: 'activityType2',
          missed: '2',
          achieved: '7',
        },
        activityType3: {
          id: 'activityType3',
          missed: '6',
          achieved: '7',
        },
        activityType4: {
          id: 'activityType4',
          missed: '5',
          achieved: '2',
        },
        activityType5: {
          id: 'activityType5',
          missed: '4',
          achieved: '8',
        },
        activityType6: {
          id: 'activityType6',
          missed: '5',
          achieved: '6',
        },
        activityType7: {
          //prospect
          id: 'activityType7',
          missed: '5',
          achieved: '3',
        },
      },
    },
    {
      userId: '1234A',
      date: dayjs().subtract(2, 'day'), //today's date
      huddleSummary: {
        huddleId: 'huddleBriefTitle',
        huddleCollection: [
          {
            title: 'Huddle3',
            desc: 'desc3',
          },
        ],
      },
      activitySummary: {
        activityType1: {
          id: 'activityType1',
          missed: '1',
          achieved: '7',
        },
        activityType2: {
          id: 'activityType2',
          missed: '5',
          achieved: '7',
        },
        activityType3: {
          id: 'activityType3',
          missed: '5',
          achieved: '7',
        },
        activityType4: {
          id: 'activityType4',
          missed: '5',
          achieved: '6',
        },
        activityType5: {
          id: 'activityType5',
          missed: '5',
          achieved: '8',
        },
        activityType6: {
          id: 'activityType6',
          missed: '5',
          achieved: '8',
        },
        activityType7: {
          //prospect
          id: 'activityType7',
          missed: '5',
          achieved: '4',
        },
      },
    },
    {
      userId: '1234A',
      date: dayjs().subtract(3, 'day'), //today's date
      huddleSummary: {
        huddleId: 'huddleBriefTitle',
        huddleCollection: [
          {
            title: 'Huddle4',
            desc: 'desc4',
          },
        ],
      },
      activitySummary: {
        activityType1: {
          id: 'activityType1',
          missed: '5',
          achieved: '7',
        },
        activityType2: {
          id: 'activityType2',
          missed: '4',
          achieved: '7',
        },
        activityType3: {
          id: 'activityType3',
          missed: '1',
          achieved: '7',
        },
        activityType4: {
          id: 'activityType4',
          missed: '5',
          achieved: '8',
        },
        activityType5: {
          id: 'activityType5',
          missed: '5',
          achieved: '8',
        },
        activityType6: {
          id: 'activityType6',
          missed: '5',
          achieved: '8',
        },
        activityType7: {
          //prospect
          id: 'activityType7',
          missed: '5',
          achieved: '4',
        },
      },
    },
    {
      userId: '1234A',
      date: dayjs().subtract(4, 'day'), //today's date
      huddleSummary: {
        huddleId: 'huddleBriefTitle',
        huddleCollection: [
          {
            title: 'Huddle5',
            desc: 'desc5',
          },
        ],
      },
      activitySummary: {
        activityType1: {
          id: 'activityType1',
          missed: '5',
          achieved: '2',
        },
        activityType2: {
          id: 'activityType2',
          missed: '4',
          achieved: '5',
        },
        activityType3: {
          id: 'activityType3',
          missed: '1',
          achieved: '3',
        },
        activityType4: {
          id: 'activityType4',
          missed: '5',
          achieved: '1',
        },
        activityType5: {
          id: 'activityType5',
          missed: '5',
          achieved: '8',
        },
        activityType6: {
          id: 'activityType6',
          missed: '5',
          achieved: '8',
        },
        activityType7: {
          //prospect
          id: 'activityType7',
          missed: '5',
          achieved: '4',
        },
      },
    },
    {
      userId: '1234A',
      date: dayjs().subtract(5, 'day'), //today's date
      huddleSummary: {
        huddleId: 'huddleBriefTitle',
        huddleCollection: [
          {
            title: 'Huddle6',
            desc: 'desc6',
          },
        ],
      },
      activitySummary: {
        activityType1: {
          id: 'activityType1',
          missed: '5',
          achieved: '2',
        },
        activityType2: {
          id: 'activityType2',
          missed: '4',
          achieved: '3',
        },
        activityType3: {
          id: 'activityType3',
          missed: '1',
          achieved: '4',
        },
        activityType4: {
          id: 'activityType4',
          missed: '5',
          achieved: '5',
        },
        activityType5: {
          id: 'activityType5',
          missed: '5',
          achieved: '8',
        },
        activityType6: {
          id: 'activityType6',
          missed: '5',
          achieved: '8',
        },
        activityType7: {
          //prospect
          id: 'activityType7',
          missed: '5',
          achieved: '4',
        },
      },
    },
    {
      userId: '1234A',
      date: dayjs().subtract(6, 'day'), //today's date
      huddleSummary: {
        huddleId: 'huddleBriefTitle',
        huddleCollection: [
          {
            title: 'Huddle7',
            desc: 'desc7',
          },
        ],
      },
      activitySummary: {
        activityType1: {
          id: 'activityType1',
          missed: '5',
          achieved: '6',
        },
        activityType2: {
          id: 'activityType2',
          missed: '4',
          achieved: '6',
        },
        activityType3: {
          id: 'activityType3',
          missed: '1',
          achieved: '6',
        },
        activityType4: {
          id: 'activityType4',
          missed: '5',
          achieved: '8',
        },
        activityType5: {
          id: 'activityType5',
          missed: '5',
          achieved: '6',
        },
        activityType6: {
          id: 'activityType6',
          missed: '5',
          achieved: '6',
        },
        activityType7: {
          //prospect
          id: 'activityType7',
          missed: '5',
          achieved: '4',
        },
      },
    },
  ];

  private readonly upcomingActivity = [
    {
      userId: '1234A',
      activities: [
        {
          date: dayjs().toISOString(),
          activity: [
            {
              id: 1,
              activityTypeId: 'activityType1',
              activityTypeIdRef: 'QWE123',
              activityType: 'inPerson',
              description: 'Collect docs',
              createTime: '2024-03-10T06:12:39.880Z',
              status: 'open',
              geoLocation: {
                latitude: 28.48877777777778,
                longitude: 77.10308333333334,
              },
              planDateTime: dayjs().toISOString(),
              endPlanDateTime: dayjs().add(1, 'day').toISOString(),
            },
            {
              id: 2,
              activityTypeId: 'activityType2',
              activityTypeIdRef: 'QWE124',
              activityType: 'call',
              description: 'salary',
              createTime: '2024-03-10T06:12:39.880Z',
              status: 'open',
              pplanDateTime: dayjs().toISOString(),
              endPlanDateTime: dayjs().add(1, 'day').toISOString(),
            },
          ],
        },
        {
          date: dayjs().add(1, 'day').toISOString(),
          activity: [
            {
              id: 3,
              activityTypeId: 'activityType3',
              activityTypeIdRef: 'QWE125',
              activityType: 'call',
              description: 'salary',
              createTime: '2024-03-09T06:12:39.880Z',
              status: 'open',
              planDateTime: dayjs().add(1, 'day').toISOString(),
              endPlanDateTime: dayjs().add(2, 'day').toISOString(),
            },
          ],
        },
        {
          date: dayjs().add(2, 'day').toISOString(),
          activity: [
            {
              id: 4,
              activityTypeId: 'activityType2',
              activityTypeIdRef: 'QWE121',
              activityType: 'inPerson',
              description: 'Collect docs',
              createTime: '2024-03-08T06:12:39.880Z',
              status: 'open',
              geoLocation: {
                latitude: 28.48877777777778,
                longitude: 77.10308333333334,
              },
              planDateTime: dayjs().add(2, 'day').toISOString(),
              endPlanDateTime: dayjs().add(3, 'day').toISOString(),
            },
            {
              id: 5,
              activityTypeId: 'activityType2',
              activityTypeIdRef: 'QWE127',
              activityType: 'call',
              description: 'salary',
              createTime: '2024-03-08T06:12:39.880Z',
              status: 'open',
              planDateTime: dayjs().add(2, 'day').toISOString(),
              endPlanDateTime: dayjs().add(3, 'day').toISOString(),
            },
          ],
        },
      ],
    },
    // {
    //   userId: '1234M',
    //   activities: [
    //     {
    //       activityType: 'inPerson',
    //       description: 'Collect salary slip',
    //       createTime: '2024-03-10T06:12:39.880Z',
    //       status: 'open',
    //       geoLocation: {
    //         latitude: 28.48877777777778,
    //         longitude: 77.10308333333334,
    //       },
    //       planDateTime: '2024-03-11T15:12:39.880Z',
    //     },
    //     {
    //       activityType: 'call',
    //       description: 'confirm details',
    //       createTime: '2024-03-10T06:12:39.880Z',
    //       status: 'open',
    //       planDateTime: '2024-03-11T14:12:39.880Z',
    //     },
    //     {
    //       activityType: 'call',
    //       description: 'salary',
    //       createTime: '2024-03-09T06:12:39.880Z',
    //       status: 'open',
    //       planDateTime: '2024-03-10T15:12:39.880Z',
    //     },
    //     {
    //       activityType: 'inPerson',
    //       description: 'Collect docs',
    //       createTime: '2024-03-08T06:12:39.880Z',
    //       status: 'open',
    //       geoLocation: {
    //         latitude: 28.48877777777778,
    //         longitude: 77.10308333333334,
    //       },
    //       planDateTime: '2024-03-09T16:12:39.880Z',
    //     },
    //     {
    //       activityType: 'call',
    //       description: 'salary',
    //       createTime: '2024-03-08T06:12:39.880Z',
    //       status: 'open',
    //       planDateTime: '2024-03-09T15:12:39.880Z',
    //     },
    //   ],
    // },
  ];

  getHello(): DataItem[] {
    return this.data;
  }

  async getDiarySummary(diarySummaryDTO: DiarySummaryDTO): Promise<any> {
    const filteredData = this.diarySummary.filter(
      (item) => item.userId === diarySummaryDTO.userId,
    );
    function filterDataByDateRange(data, startDate, endDate) {
      const startDateMod = startDate.toISOString().split('T')[0];
      const endDateMod = endDate.toISOString().split('T')[0];
      const filteredData = data.filter((item) => {
        const itemDate = dayjs(item.date);
        const itemDateMod = itemDate.toISOString().split('T')[0];
        return itemDateMod >= startDateMod && itemDateMod <= endDateMod;
      });
      return filteredData;
    }
    const fromDate = dayjs().subtract(diarySummaryDTO.fromDate, 'day');
    const toDate = dayjs(diarySummaryDTO.toDate);
    const filteredDataDate = filterDataByDateRange(
      filteredData,
      fromDate,
      toDate,
    );
    return filteredDataDate;
  }

  async modifyLead(leadDto: LeadDto): Promise<any> {
    if (leadDto.type === 'EDIT') {
      return {
        statusCode: HttpStatus.OK,
        message: {
          id: 'Success',
          desc: 'Lead Updated Successfully',
        },
        data: {
          result: 'Lead updated for the given data',
        },
      };
    } else {
      return 'lead created';
    }
  }

  async getUpcomingActivity(userInfoDto: UserInfoDto): Promise<any> {
    const filteredDate = this.upcomingActivity.filter(
      (item) => item.userId === userInfoDto.userId,
    );

    return {
      statusCode: HttpStatus.OK,
      message: {
        id: 'Success',
        message: 'Data fetched successfully',
      },
      data: filteredDate[0],
    };
  }

  async getAttendance(attendanceDto: AttendanceDto): Promise<any> {
    if (attendanceDto.type === 'IN') {
      const combinedDateTime = dayjs(
        dayjs().format('YYYY-MM-DD') + ' ' + '04:53:21.258Z',
      );
      return {
        statusCode: HttpStatus.OK,
        message: {
          id: 'Success',
          message: 'Attendance in time updated',
        },
        data: combinedDateTime.toISOString(),
      };
    } else if (attendanceDto.type === 'OUT') {
      return {
        statusCode: HttpStatus.OK,
        message: {
          id: 'Success',
          message: 'Attendance out time updated',
        },
        data: dayjs(),
      };
    } else {
      return {
        statusCode: HttpStatus.OK,
        message: {
          id: 'Success',
          message: 'Leave updated',
        },
        data: 'Leave applied',
      };
    }
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

  private readonly leadSummaryData = [
    {
      id: '1',
      leadName: 'John',
      leadEmployment: 'Salaried',
      leadStatus: 'new',
      leadNo: '1231231',
      leadDate: '2024-11-11T11.11.11Z',
      leadQuality: 'ABC',
      OnlineApplicationStatus: 'Sent to HDFC',
      leadDetails: {
        leadStatusDetails: {
          leadFollowUp: 'closed',
          leadReason: 'sys_aconv',
          leadDedupeStatus: 'converted',
        },
        personalDetails: {
          name: 'John',
          mobileNo: '8918912242',
          emailId: 'abce@gasd.com',
          employmentType: 'employed',
          totalMonthlyIncome: 'Rs.150000',
          cityOfContact: 'Mumbai',
          customerAddress: 'Colaba, Mumbai',
          incomeRange: 'below Rs. 20 Lakhs',
          incomeBased: 'ITR',
          incomeBasedBalue: '0',
        },
        loanDetails: {
          loanType: 'NEW',
          loanAmount: '99880',
          propertySelected: 'NO',
          location: 'Worli',
          monthlyEmi: '30000',
        },
        sourceDetails: {
          sourceType: 'associate',
          subSource: 'Physical associate',
          termSource: 'assocaite_cd',
          bsa: 'a0064-aayush nai k',
          archivioSource: 'Kr',
          hdfcReach: 'no',
          residentType: 'nri',
          originBranch: '201-Mumbai Western',
          originPlace: 'and-andheri-e',
          sourcePlace: 'BKC',
          subventionFees: '100',
          salesExecutive: '33692-ravi dutt pathak',
          promoCode: '',
          campaignSelection: 'No',
          meetingMode: 'call',
          meetingDateTime: '2024-03-06T11.11.11Z',
        },
        otherInfo: {
          lmsCalling: 'N',
          expectedFollowUpDate: '2024-11-11',
        },
        spotOffer: {
          provided: 'No',
        },
      },
      leadActivity: {
        activity: 'No',
      },
      leadApplication: {
        newApplicationStarted: true,
        personalInfo: true,
        propertyInfo: false,
        financialInfo: true,
        applicationReview: true,
        customerConsent: true,
        feePaymentPending: true,
        submitToHdfc: false,
      },
      leadDoc: {
        doc: null,
      },
    },
  ];

  async getLeadSummaryData(idDto: IdDto): Promise<any> {
    const filteredData = this.leadSummaryData.filter(
      (item) => item.id === idDto.id,
    );
    return {
      statusCode: HttpStatus.OK,
      message: {
        id: 'Success',
        desc: 'Data fetched',
      },
      data: filteredData[0],
    };
  }

  async createLead(createLeadDto: CreateLeadDto): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      message: {
        id: 'Success',
        desc: 'Lead Created',
      },
      data: 'Lead create successfully',
    };
  }
}
