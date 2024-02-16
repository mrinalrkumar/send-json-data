/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
interface DataItem {
  id: number;
  text: string;
  value: number;
}

@Injectable()


export class AppService {
  private readonly data: DataItem[] = [
    { id: 1, text: "ALL", value:14 },
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

  getLeadSummary(): any {
    return [
      {
        "id": 1,
        "leadNo": "ASDA1231A",
        "leadName": "John",
        "employmentType": "Self employed",
        "statusDesc": "New",
        "leadDate": "2024-12-12",
        "leadPhone": "9876543210",
        "leadProductType": "Home loan",
        "lmsCalling": "No",
        "sourceType": "Bank",
        "applicationStatus": "Online",
        "meetingDate": "2024-12-12"
      }
    ]
  }

  getFileSummary(): any {
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
        "loanAmount": "1000000"
      }
    ]
  }

  getDisbSummary(): any {
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
        "loanAmount": "10000000"
      }
    ]
  }
}
