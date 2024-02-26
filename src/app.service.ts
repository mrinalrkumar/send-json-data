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
    return [
      {
        "id": 1,
        "fileId": "ASDA11231ADS",
        "fileNo": "1231231",
        "fileName": "John",
        "employmentType": "Self employed",
        "statusDesc": "DDEP",
        "product": "home loan",
        "openQueries": "0",
        "property": "Y",
        "loanAmount": "1000000",
        "timestamp": ""
      },
      {
        "id": 2,
        "fileId": "XYZB98765XYZ",
        "fileNo": "9876543",
        "fileName": "Jane",
        "employmentType": "Salaried",
        "statusDesc": "APPR",
        "product": "car loan",
        "openQueries": "2",
        "property": "N",
        "loanAmount": "50000",
        "timestamp": ""
      },
      {
        "id": 3,
        "fileId": "QWER45678QWE",
        "fileNo": "4567890",
        "fileName": "Bob",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "product": "personal loan",
        "openQueries": "1",
        "property": "Y",
        "loanAmount": "75000",
        "timestamp": ""
      },
      {
        "id": 4,
        "fileId": "LKJH78901LKJ",
        "fileNo": "1122334",
        "fileName": "Alice",
        "employmentType": "Salaried",
        "statusDesc": "DCLN",
        "product": "education loan",
        "openQueries": "3",
        "property": "N",
        "loanAmount": "120000",
        "timestamp": ""
      },
      {
        "id": 5,
        "fileId": "ASDA11231ADS",
        "fileNo": "1231231",
        "fileName": "John",
        "employmentType": "Self employed",
        "statusDesc": "DDEP",
        "product": "home loan",
        "openQueries": "0",
        "property": "Y",
        "loanAmount": "1000000",
        "timestamp": ""
      },
      {
        "id": 6,
        "fileId": "XYZB98765XYZ",
        "fileNo": "9876543",
        "fileName": "Jane",
        "employmentType": "Salaried",
        "statusDesc": "APPR",
        "product": "car loan",
        "openQueries": "2",
        "property": "N",
        "loanAmount": "50000",
        "timestamp": ""
      },
      {
        "id": 7,
        "fileId": "QWER45678QWE",
        "fileNo": "4567890",
        "fileName": "Bob",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "product": "personal loan",
        "openQueries": "1",
        "property": "Y",
        "loanAmount": "75000",
        "timestamp": ""
      },
      {
        "id": 8,
        "fileId": "LKJH78901LKJ",
        "fileNo": "1122334",
        "fileName": "Alice",
        "employmentType": "Salaried",
        "statusDesc": "DCLN",
        "product": "education loan",
        "openQueries": "3",
        "property": "N",
        "loanAmount": "120000",
        "timestamp": ""
      },
      {
        "id": 9,
        "fileId": "MNBV56789MNB",
        "fileNo": "5678901",
        "fileName": "Charlie",
        "employmentType": "Self employed",
        "statusDesc": "DDEP",
        "product": "business loan",
        "openQueries": "0",
        "property": "Y",
        "loanAmount": "200000",
        "timestamp": ""
      },
      {
        "id": 10,
        "fileId": "MJKL23456MJK",
        "fileNo": "2345678",
        "fileName": "Henry",
        "employmentType": "Self employed",
        "statusDesc": "DDEP",
        "product": "business loan",
        "openQueries": "1",
        "property": "Y",
        "loanAmount": "250000",
        "timestamp": ""
      },
      {
        "id": 11,
        "fileId": "QWER76543QWE",
        "fileNo": "7654321",
        "fileName": "Ivy",
        "employmentType": "Salaried",
        "statusDesc": "APPR",
        "product": "personal loan",
        "openQueries": "2",
        "property": "N",
        "loanAmount": "70000",
        "timestamp": ""
      },
      {
        "id": 12,
        "fileId": "LKJH87654LKJ",
        "fileNo": "8765432",
        "fileName": "Jack",
        "employmentType": "Self employed",
        "statusDesc": "DCLN",
        "product": "home loan",
        "openQueries": "0",
        "property": "Y",
        "loanAmount": "180000",
        "timestamp": ""
      },
      {
        "id": 13,
        "fileId": "ZXCV98765ZXC",
        "fileNo": "9876543",
        "fileName": "Katie",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "product": "car loan",
        "openQueries": "3",
        "property": "N",
        "loanAmount": "80000",
        "timestamp": ""
      },
      {
        "id": 14,
        "fileId": "TYUI12345TYU",
        "fileNo": "1234567",
        "fileName": "Leo",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "product": "business loan",
        "openQueries": "1",
        "property": "Y",
        "loanAmount": "220000",
        "timestamp": ""
      },
      {
        "id": 15,
        "fileId": "ASDF87654ASD",
        "fileNo": "8765432",
        "fileName": "Mia",
        "employmentType": "Self employed",
        "statusDesc": "APPR",
        "product": "education loan",
        "openQueries": "0",
        "property": "N",
        "loanAmount": "120000",
        "timestamp": ""
      },
      {
        "id": 16,
        "fileId": "MJKL98765MJK",
        "fileNo": "9876543",
        "fileName": "Nina",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "product": "car loan",
        "openQueries": "2",
        "property": "N",
        "loanAmount": "65000",
        "timestamp": ""
      },
      {
        "id": 17,
        "fileId": "QWER12345QWE",
        "fileNo": "1234567",
        "fileName": "Oscar",
        "employmentType": "Self employed",
        "statusDesc": "APPR",
        "product": "home loan",
        "openQueries": "1",
        "property": "Y",
        "loanAmount": "160000",
        "timestamp": ""
      },
      {
        "id": 18,
        "fileId": "LKJH23456LKJ",
        "fileNo": "2345678",
        "fileName": "Penny",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "product": "business loan",
        "openQueries": "0",
        "property": "Y",
        "loanAmount": "210000",
        "timestamp": ""
      },
      {
        "id": 19,
        "fileId": "ZXCV87654ZXC",
        "fileNo": "8765432",
        "fileName": "Quincy",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "product": "personal loan",
        "openQueries": "3",
        "property": "N",
        "loanAmount": "95000",
        "timestamp": ""
      },
      {
        "id": 20,
        "fileId": "TYUI98765TYU",
        "fileNo": "9876543",
        "fileName": "Rachel",
        "employmentType": "Self employed",
        "statusDesc": "APPR",
        "product": "education loan",
        "openQueries": "1",
        "property": "Y",
        "loanAmount": "130000",
        "timestamp": ""
      },
      {
        "id": 21,
        "fileId": "ASDF23456ASD",
        "fileNo": "2345678",
        "fileName": "Sam",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "product": "car loan",
        "openQueries": "2",
        "property": "N",
        "loanAmount": "72000",
        "timestamp": ""
      },
      {
        "id": 22,
        "fileId": "MJKL87654MJK",
        "fileNo": "8765432",
        "fileName": "Tina",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "product": "business loan",
        "openQueries": "1",
        "property": "Y",
        "loanAmount": "185000",
        "timestamp": ""
      },
      {
        "id": 23,
        "fileId": "QWER98765QWE",
        "fileNo": "9876543",
        "fileName": "Ulysses",
        "employmentType": "Self employed",
        "statusDesc": "APPR",
        "product": "home loan",
        "openQueries": "0",
        "property": "Y",
        "loanAmount": "140000",
        "timestamp": ""
      },
      {
        "id": 24,
        "fileId": "LKJH12345LKJ",
        "fileNo": "1234567",
        "fileName": "Victoria",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "product": "personal loan",
        "openQueries": "3",
        "property": "N",
        "loanAmount": "88000",
        "timestamp": ""
      },
      {
        "id": 25,
        "fileId": "ZXCV87654ZXC",
        "fileNo": "8765432",
        "fileName": "Walter",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "product": "education loan",
        "openQueries": "1",
        "property": "Y",
        "loanAmount": "155000",
        "timestamp": ""
      }
    ]
  }

  async getDisbSummary(userInfoDto: UserInfoDto): Promise<any> {
    return [
      {
        "id": 1,
        "disbNo": "ASDA1231A",
        "disbName": "John",
        "employmentType": "Self employed",
        "statusDesc": "SN/SANC",
        "fileNo": "20241231",
        "product": "Home loan",
        "openQueries": "0",
        "property": "Y",
        "disbAmt": "10000",
        "loanAmount": "10000000",
        "timestamp": ""
      },
      {
        "id": 2,
        "disbNo": "XYZB9876B",
        "disbName": "Jane",
        "employmentType": "Salaried",
        "statusDesc": "APPR",
        "fileNo": "20241232",
        "product": "Car loan",
        "openQueries": "2",
        "property": "N",
        "disbAmt": "8000",
        "loanAmount": "50000",
        "timestamp": ""
      },
      {
        "id": 3,
        "disbNo": "QWER4567C",
        "disbName": "Bob",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "fileNo": "20241233",
        "product": "Personal loan",
        "openQueries": "1",
        "property": "Y",
        "disbAmt": "12000",
        "loanAmount": "75000",
        "timestamp": ""
      },
      {
        "id": 4,
        "disbNo": "LKJH7890D",
        "disbName": "Alice",
        "employmentType": "Salaried",
        "statusDesc": "DCLN",
        "fileNo": "20241234",
        "product": "Education loan",
        "openQueries": "3",
        "property": "N",
        "disbAmt": "15000",
        "loanAmount": "120000",
        "timestamp": ""
      },
      {
        "id": 5,
        "disbNo": "MNBV5678E",
        "disbName": "Charlie",
        "employmentType": "Self employed",
        "statusDesc": "SN/SANC",
        "fileNo": "20241235",
        "product": "Business loan",
        "openQueries": "0",
        "property": "Y",
        "disbAmt": "20000",
        "loanAmount": "200000",
        "timestamp": ""
      },
      {
        "id": 6,
        "disbNo": "POIU8765F",
        "disbName": "David",
        "employmentType": "Salaried",
        "statusDesc": "PEND",
        "fileNo": "20241236",
        "product": "Personal loan",
        "openQueries": "2",
        "property": "N",
        "disbAmt": "9000",
        "loanAmount": "90000",
        "timestamp": ""
      },
      {
        "id": 7,
        "disbNo": "ZXCV3456G",
        "disbName": "Eva",
        "employmentType": "Self employed",
        "statusDesc": "SN/SANC",
        "fileNo": "20241237",
        "product": "Home loan",
        "openQueries": "1",
        "property": "Y",
        "disbAmt": "18000",
        "loanAmount": "150000",
        "timestamp": ""
      },
      {
        "id": 8,
        "disbNo": "TYUI9876H",
        "disbName": "Frank",
        "employmentType": "Salaried",
        "statusDesc": "APPR",
        "fileNo": "20241238",
        "product": "Car loan",
        "openQueries": "0",
        "property": "N",
        "disbAmt": "6000",
        "loanAmount": "60000",
        "timestamp": ""
      },
      {
        "id": 9,
        "disbNo": "ASDF5432I",
        "disbName": "Grace",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "fileNo": "20241239",
        "product": "Education loan",
        "openQueries": "3",
        "property": "Y",
        "disbAmt": "11000",
        "loanAmount": "110000",
        "timestamp": ""
      },
      {
        "id": 10,
        "disbNo": "MJKL2345J",
        "disbName": "Henry",
        "employmentType": "Self employed",
        "statusDesc": "SN/SANC",
        "fileNo": "20241240",
        "product": "Business loan",
        "openQueries": "1",
        "property": "Y",
        "disbAmt": "25000",
        "loanAmount": "250000",
        "timestamp": ""
      },
      {
        "id": 11,
        "disbNo": "QWER7654K",
        "disbName": "Ivy",
        "employmentType": "Salaried",
        "statusDesc": "APPR",
        "fileNo": "20241241",
        "product": "Personal loan",
        "openQueries": "2",
        "property": "N",
        "disbAmt": "7000",
        "loanAmount": "70000",
        "timestamp": ""
      },
      {
        "id": 12,
        "disbNo": "LKJH8765L",
        "disbName": "Jack",
        "employmentType": "Self employed",
        "statusDesc": "DCLN",
        "fileNo": "20241242",
        "product": "Home loan",
        "openQueries": "0",
        "property": "Y",
        "disbAmt": "18000",
        "loanAmount": "180000",
        "timestamp": ""
      },
      {
        "id": 13,
        "disbNo": "ZXCV9876M",
        "disbName": "Katie",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "fileNo": "20241243",
        "product": "Car loan",
        "openQueries": "3",
        "property": "N",
        "disbAmt": "8000",
        "loanAmount": "80000",
        "timestamp": ""
      },
      {
        "id": 14,
        "disbNo": "TYUI1234N",
        "disbName": "Leo",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "fileNo": "20241244",
        "product": "Business loan",
        "openQueries": "1",
        "property": "Y",
        "disbAmt": "22000",
        "loanAmount": "220000",
        "timestamp": ""
      },
      {
        "id": 15,
        "disbNo": "ASDF8765O",
        "disbName": "Mia",
        "employmentType": "Self employed",
        "statusDesc": "APPR",
        "fileNo": "20241245",
        "product": "Education loan",
        "openQueries": "0",
        "property": "N",
        "disbAmt": "12000",
        "loanAmount": "120000",
        "timestamp": ""
      },
      {
        "id": 16,
        "disbNo": "MJKL9876P",
        "disbName": "Nina",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "fileNo": "20241246",
        "product": "Car loan",
        "openQueries": "2",
        "property": "N",
        "disbAmt": "6500",
        "loanAmount": "65000",
        "timestamp": ""
      },
      {
        "id": 17,
        "disbNo": "QWER1234Q",
        "disbName": "Oscar",
        "employmentType": "Self employed",
        "statusDesc": "APPR",
        "fileNo": "20241247",
        "product": "Home loan",
        "openQueries": "1",
        "property": "Y",
        "disbAmt": "16000",
        "loanAmount": "160000",
        "timestamp": ""
      },
      {
        "id": 18,
        "disbNo": "LKJH2345R",
        "disbName": "Penny",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "fileNo": "20241248",
        "product": "Business loan",
        "openQueries": "0",
        "property": "Y",
        "disbAmt": "21000",
        "loanAmount": "210000",
        "timestamp": ""
      },
      {
        "id": 19,
        "disbNo": "ZXCV8765S",
        "disbName": "Quincy",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "fileNo": "20241249",
        "product": "Personal loan",
        "openQueries": "3",
        "property": "N",
        "disbAmt": "9500",
        "loanAmount": "95000",
        "timestamp": ""
      },
      {
        "id": 20,
        "disbNo": "TYUI9876T",
        "disbName": "Rachel",
        "employmentType": "Self employed",
        "statusDesc": "APPR",
        "fileNo": "20241250",
        "product": "Education loan",
        "openQueries": "1",
        "property": "Y",
        "disbAmt": "13000",
        "loanAmount": "130000",
        "timestamp": ""
      },
      {
        "id": 21,
        "disbNo": "ASDF2345U",
        "disbName": "Sam",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "fileNo": "20241251",
        "product": "Car loan",
        "openQueries": "2",
        "property": "N",
        "disbAmt": "7200",
        "loanAmount": "72000",
        "timestamp": ""
      },
      {
        "id": 22,
        "disbNo": "MJKL8765V",
        "disbName": "Tina",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "fileNo": "20241252",
        "product": "Business loan",
        "openQueries": "1",
        "property": "Y",
        "disbAmt": "18500",
        "loanAmount": "185000",
        "timestamp": ""
      },
      {
        "id": 23,
        "disbNo": "QWER9876W",
        "disbName": "Ulysses",
        "employmentType": "Self employed",
        "statusDesc": "APPR",
        "fileNo": "20241253",
        "product": "Home loan",
        "openQueries": "0",
        "property": "Y",
        "disbAmt": "14000",
        "loanAmount": "140000",
        "timestamp": ""
      },
      {
        "id": 24,
        "disbNo": "LKJH1234X",
        "disbName": "Victoria",
        "employmentType": "Freelancer",
        "statusDesc": "PEND",
        "fileNo": "20241254",
        "product": "Personal loan",
        "openQueries": "3",
        "property": "N",
        "disbAmt": "8800",
        "loanAmount": "88000",
        "timestamp": ""
      },
      {
        "id": 25,
        "disbNo": "ZXCV8765Y",
        "disbName": "Walter",
        "employmentType": "Salaried",
        "statusDesc": "DDEP",
        "fileNo": "20241255",
        "product": "Education loan",
        "openQueries": "1",
        "property": "Y",
        "disbAmt": "15500",
        "loanAmount": "155000",
        "timestamp": ""
      }
    ]
  }

  async getQuerySummary(userInfoDto: UserInfoDto): Promise<any> {
    return [
      {
        "id": 1,
        "name": "Joe",
        "employmentType": "Salaried",
        "queryDesc": "CR/APPR",
        "fileNo": "12312312",
        "generated": "2023-12-12",
        "loanAmount": "1000000",
        "openQueries": "3",
        "timestamp": ""
      },
      {
        "id": 2,
        "name": "Joe",
        "employmentType": "Salaried",
        "queryDesc": "CR/APPR",
        "fileNo": "12312312",
        "generated": "2023-12-12",
        "loanAmount": "1000000",
        "openQueries": "3",
        "timestamp": ""
      },
      {
        "id": 3,
        "name": "Bob",
        "employmentType": "Full-time",
        "queryDesc": "CREDIT CARD",
        "fileNo": "76543210",
        "generated": "2023-09-03",
        "loanAmount": "300000",
        "openQueries": "4",
        "timestamp": ""
      },
      {
        "id": 4,
        "name": "Emma",
        "employmentType": "Salaried",
        "queryDesc": "AUTO LOAN",
        "fileNo": "65432109",
        "generated": "2023-08-22",
        "loanAmount": "200000",
        "openQueries": "0",
        "timestamp": ""
      },
      {
        "id": 5,
        "name": "David",
        "employmentType": "Freelance",
        "queryDesc": "PERSONAL LOAN",
        "fileNo": "54321098",
        "generated": "2023-07-10",
        "loanAmount": "600000",
        "openQueries": "2",
        "timestamp": ""
      },
      {
        "id": 6,
        "name": "Sophie",
        "employmentType": "Part-time",
        "queryDesc": "HOME LOAN",
        "fileNo": "43210987",
        "generated": "2023-06-05",
        "loanAmount": "900000",
        "openQueries": "1",
        "timestamp": ""
      },
      {
        "id": 7,
        "name": "Michael",
        "employmentType": "Salaried",
        "queryDesc": "STUDENT LOAN",
        "fileNo": "32109876",
        "generated": "2023-05-18",
        "loanAmount": "400000",
        "openQueries": "3",
        "timestamp": ""
      },
      {
        "id": 8,
        "name": "Olivia",
        "employmentType": "Full-time",
        "queryDesc": "BUSINESS LOAN",
        "fileNo": "21098765",
        "generated": "2023-04-01",
        "loanAmount": "800000",
        "openQueries": "2",
        "timestamp": ""
      },
      {
        "id": 9,
        "name": "Daniel",
        "employmentType": "Contract",
        "queryDesc": "MEDICAL LOAN",
        "fileNo": "10987654",
        "generated": "2023-03-12",
        "loanAmount": "700000",
        "openQueries": "1",
        "timestamp": ""
      },
      {
        "id": 10,
        "name": "Ava",
        "employmentType": "Freelance",
        "queryDesc": "EDUCATION LOAN",
        "fileNo": "09876543",
        "generated": "2023-02-28",
        "loanAmount": "350000",
        "openQueries": "4",
        "timestamp": ""
      },
      {
        "id": 11,
        "name": "Liam",
        "employmentType": "Part-time",
        "queryDesc": "CAR LOAN",
        "fileNo": "11223344",
        "generated": "2023-05-15",
        "loanAmount": "600000",
        "openQueries": "2",
        "timestamp": ""
      },
      {
        "id": 12,
        "name": "Sophia",
        "employmentType": "Salaried",
        "queryDesc": "HOME IMPROVEMENT LOAN",
        "fileNo": "22334455",
        "generated": "2023-07-20",
        "loanAmount": "800000",
        "openQueries": "1",
        "timestamp": ""
      },
      {
        "id": 13,
        "name": "Jackson",
        "employmentType": "Contract",
        "queryDesc": "PERSONAL LOAN",
        "fileNo": "33445566",
        "generated": "2023-09-10",
        "loanAmount": "450000",
        "openQueries": "3",
        "timestamp": ""
      },
      {
        "id": 14,
        "name": "Emma",
        "employmentType": "Full-time",
        "queryDesc": "AUTO LOAN",
        "fileNo": "44556677",
        "generated": "2023-11-05",
        "loanAmount": "700000",
        "openQueries": "0",
        "timestamp": ""
      },
      {
        "id": 15,
        "name": "Oliver",
        "employmentType": "Freelance",
        "queryDesc": "BUSINESS LOAN",
        "fileNo": "55667788",
        "generated": "2024-01-01",
        "loanAmount": "900000",
        "openQueries": "2",
        "timestamp": ""
      },
      {
        "id": 16,
        "name": "Aria",
        "employmentType": "Part-time",
        "queryDesc": "MEDICAL LOAN",
        "fileNo": "66778899",
        "generated": "2024-02-15",
        "loanAmount": "550000",
        "openQueries": "1",
        "timestamp": ""
      },
      {
        "id": 17,
        "name": "Henry",
        "employmentType": "Salaried",
        "queryDesc": "STUDENT LOAN",
        "fileNo": "77889900",
        "generated": "2024-03-12",
        "loanAmount": "650000",
        "openQueries": "4",
        "timestamp": ""
      },
      {
        "id": 18,
        "name": "Mia",
        "employmentType": "Contract",
        "queryDesc": "HOME LOAN",
        "fileNo": "88990011",
        "generated": "2024-04-18",
        "loanAmount": "750000",
        "openQueries": "3",
        "timestamp": ""
      },
      {
        "id": 19,
        "name": "William",
        "employmentType": "Freelance",
        "queryDesc": "CAR LOAN",
        "fileNo": "99001122",
        "generated": "2024-05-25",
        "loanAmount": "500000",
        "openQueries": "2",
        "timestamp": ""
      },
      {
        "id": 20,
        "name": "Isabella",
        "employmentType": "Full-time",
        "queryDesc": "PERSONAL LOAN",
        "fileNo": "00112233",
        "generated": "2024-06-30",
        "loanAmount": "850000",
        "openQueries": "1",
        "timestamp": ""
      },
      {
        "id": 21,
        "name": "Ethan",
        "employmentType": "Salaried",
        "queryDesc": "HOME IMPROVEMENT LOAN",
        "fileNo": "11223344",
        "generated": "2023-04-15",
        "loanAmount": "600000",
        "openQueries": "2",
        "timestamp": ""
      }
    ]
  }
}
