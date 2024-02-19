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
      },
      {
        "id": 2,
        "leadNo": "XYZ5678B",
        "leadName": "Alice",
        "employmentType": "Salaried",
        "statusDesc": "In Progress",
        "leadDate": "2024-11-25",
        "leadPhone": "8765432109",
        "leadProductType": "Car loan",
        "lmsCalling": "Yes",
        "sourceType": "Online",
        "applicationStatus": "Pending",
        "meetingDate": "2024-11-30"
      },
      {
        "id": 3,
        "leadNo": "QWER9876C",
        "leadName": "Bob",
        "employmentType": "Business Owner",
        "statusDesc": "Completed",
        "leadDate": "2024-10-15",
        "leadPhone": "7654321098",
        "leadProductType": "Personal loan",
        "lmsCalling": "No",
        "sourceType": "Referral",
        "applicationStatus": "Approved",
        "meetingDate": "2024-10-20"
      },
      {
        "id": 4,
        "leadNo": "MNBV1234D",
        "leadName": "Eva",
        "employmentType": "Student",
        "statusDesc": "New",
        "leadDate": "2024-09-05",
        "leadPhone": "6543210987",
        "leadProductType": "Education loan",
        "lmsCalling": "Yes",
        "sourceType": "Agent",
        "applicationStatus": "Rejected",
        "meetingDate": "2024-09-10"
      },
      {
        "id": 5,
        "leadNo": "PLKM0987E",
        "leadName": "Charlie",
        "employmentType": "Freelancer",
        "statusDesc": "In Progress",
        "leadDate": "2024-08-20",
        "leadPhone": "5432109876",
        "leadProductType": "Credit card",
        "lmsCalling": "No",
        "sourceType": "Bank",
        "applicationStatus": "Pending",
        "meetingDate": "2024-08-25"
      },
      {
        "id": 6,
        "leadNo": "POIU7654F",
        "leadName": "Diana",
        "employmentType": "Salaried",
        "statusDesc": "Completed",
        "leadDate": "2024-07-10",
        "leadPhone": "4321098765",
        "leadProductType": "Home loan",
        "lmsCalling": "Yes",
        "sourceType": "Online",
        "applicationStatus": "Approved",
        "meetingDate": "2024-07-15"
      },
      {
        "id": 7,
        "leadNo": "LKJH4321G",
        "leadName": "Frank",
        "employmentType": "Self employed",
        "statusDesc": "New",
        "leadDate": "2024-06-28",
        "leadPhone": "3210987654",
        "leadProductType": "Business loan",
        "lmsCalling": "No",
        "sourceType": "Online",
        "applicationStatus": "Pending",
        "meetingDate": "2024-07-03"
      },
      {
        "id": 8,
        "leadNo": "ZXCV8765H",
        "leadName": "Grace",
        "employmentType": "Salaried",
        "statusDesc": "In Progress",
        "leadDate": "2024-06-12",
        "leadPhone": "2109876543",
        "leadProductType": "Personal loan",
        "lmsCalling": "Yes",
        "sourceType": "Referral",
        "applicationStatus": "Approved",
        "meetingDate": "2024-06-17"
      },
      {
        "id": 9,
        "leadNo": "POIU0987I",
        "leadName": "Henry",
        "employmentType": "Student",
        "statusDesc": "Completed",
        "leadDate": "2024-05-25",
        "leadPhone": "1098765432",
        "leadProductType": "Education loan",
        "lmsCalling": "Yes",
        "sourceType": "Agent",
        "applicationStatus": "Rejected",
        "meetingDate": "2024-05-30"
      },
      {
        "id": 10,
        "leadNo": "MNBV7654J",
        "leadName": "Ivy",
        "employmentType": "Freelancer",
        "statusDesc": "New",
        "leadDate": "2024-05-10",
        "leadPhone": "9876543210",
        "leadProductType": "Car loan",
        "lmsCalling": "No",
        "sourceType": "Bank",
        "applicationStatus": "Online",
        "meetingDate": "2024-05-15"
      },
      {
        "id": 11,
        "leadNo": "ASDF1234K",
        "leadName": "Jack",
        "employmentType": "Business Owner",
        "statusDesc": "In Progress",
        "leadDate": "2024-04-28",
        "leadPhone": "8765432109",
        "leadProductType": "Home loan",
        "lmsCalling": "Yes",
        "sourceType": "Online",
        "applicationStatus": "Pending",
        "meetingDate": "2024-05-03"
      },
      {
        "id": 12,
        "leadNo": "ZXCV5678L",
        "leadName": "Katherine",
        "employmentType": "Salaried",
        "statusDesc": "Completed",
        "leadDate": "2024-04-12",
        "leadPhone": "7654321098",
        "leadProductType": "Personal loan",
        "lmsCalling": "No",
        "sourceType": "Referral",
        "applicationStatus": "Approved",
        "meetingDate": "2024-04-17"
      },
      {
        "id": 13,
        "leadNo": "POIU9876M",
        "leadName": "Leo",
        "employmentType": "Student",
        "statusDesc": "New",
        "leadDate": "2024-03-25",
        "leadPhone": "6543210987",
        "leadProductType": "Education loan",
        "lmsCalling": "Yes",
        "sourceType": "Agent",
        "applicationStatus": "Rejected",
        "meetingDate": "2024-03-30"
      },
      {
        "id": 14,
        "leadNo": "MNBV0987N",
        "leadName": "Mia",
        "employmentType": "Freelancer",
        "statusDesc": "In Progress",
        "leadDate": "2024-03-10",
        "leadPhone": "5432109876",
        "leadProductType": "Credit card",
        "lmsCalling": "No",
        "sourceType": "Bank",
        "applicationStatus": "Pending",
        "meetingDate": "2024-03-15"
      },
      {
        "id": 15,
        "leadNo": "PLKM7654O",
        "leadName": "Nathan",
        "employmentType": "Self employed",
        "statusDesc": "Completed",
        "leadDate": "2024-02-28",
        "leadPhone": "4321098765",
        "leadProductType": "Business loan",
        "lmsCalling": "Yes",
        "sourceType": "Online",
        "applicationStatus": "Approved",
        "meetingDate": "2024-03-05"
      },
      {
        "id": 16,
        "leadNo": "POIU2345P",
        "leadName": "Olivia",
        "employmentType": "Salaried",
        "statusDesc": "New",
        "leadDate": "2024-02-12",
        "leadPhone": "3210987654",
        "leadProductType": "Car loan",
        "lmsCalling": "No",
        "sourceType": "Referral",
        "applicationStatus": "Online",
        "meetingDate": "2024-02-17"
      },
      {
        "id": 17,
        "leadNo": "LKJH8765Q",
        "leadName": "Peter",
        "employmentType": "Business Owner",
        "statusDesc": "In Progress",
        "leadDate": "2024-01-25",
        "leadPhone": "2109876543",
        "leadProductType": "Personal loan",
        "lmsCalling": "Yes",
        "sourceType": "Agent",
        "applicationStatus": "Pending",
        "meetingDate": "2024-01-30"
      },
      {
        "id": 18,
        "leadNo": "ZXCV5432R",
        "leadName": "Quinn",
        "employmentType": "Student",
        "statusDesc": "Completed",
        "leadDate": "2023-12-10",
        "leadPhone": "1098765432",
        "leadProductType": "Home loan",
        "lmsCalling": "No",
        "sourceType": "Bank",
        "applicationStatus": "Approved",
        "meetingDate": "2023-12-15"
      },
      {
        "id": 19,
        "leadNo": "ASDF8765S",
        "leadName": "Rachel",
        "employmentType": "Freelancer",
        "statusDesc": "New",
        "leadDate": "2023-11-25",
        "leadPhone": "9876543210",
        "leadProductType": "Credit card",
        "lmsCalling": "Yes",
        "sourceType": "Online",
        "applicationStatus": "Pending",
        "meetingDate": "2023-11-30"
      },
      {
        "id": 20,
        "leadNo": "LKJH4321T",
        "leadName": "Samuel",
        "employmentType": "Salaried",
        "statusDesc": "In Progress",
        "leadDate": "2023-11-10",
        "leadPhone": "8765432109",
        "leadProductType": "Personal loan",
        "lmsCalling": "No",
        "sourceType": "Referral",
        "applicationStatus": "Online",
        "meetingDate": "2023-11-15"
      },
      {
        "id": 21,
        "leadNo": "ZXCV0987U",
        "leadName": "Tina",
        "employmentType": "Business Owner",
        "statusDesc": "Completed",
        "leadDate": "2023-10-25",
        "leadPhone": "7654321098",
        "leadProductType": "Education loan",
        "lmsCalling": "Yes",
        "sourceType": "Agent",
        "applicationStatus": "Approved",
        "meetingDate": "2023-10-30"
      },
      {
        "id": 22,
        "leadNo": "POIU7654V",
        "leadName": "Victor",
        "employmentType": "Student",
        "statusDesc": "New",
        "leadDate": "2023-10-10",
        "leadPhone": "6543210987",
        "leadProductType": "Car loan",
        "lmsCalling": "No",
        "sourceType": "Bank",
        "applicationStatus": "Pending",
        "meetingDate": "2023-10-15"
      },
      {
        "id": 23,
        "leadNo": "MNBV2345W",
        "leadName": "Wendy",
        "employmentType": "Self employed",
        "statusDesc": "In Progress",
        "leadDate": "2023-09-25",
        "leadPhone": "5432109876",
        "leadProductType": "Home loan",
        "lmsCalling": "Yes",
        "sourceType": "Online",
        "applicationStatus": "Online",
        "meetingDate": "2023-09-30"
      },
      {
        "id": 24,
        "leadNo": "PLKM8765X",
        "leadName": "Xavier",
        "employmentType": "Freelancer",
        "statusDesc": "Completed",
        "leadDate": "2023-09-10",
        "leadPhone": "4321098765",
        "leadProductType": "Credit card",
        "lmsCalling": "No",
        "sourceType": "Referral",
        "applicationStatus": "Approved",
        "meetingDate": "2023-09-15"
      },
      {
        "id": 25,
        "leadNo": "POIU4321Y",
        "leadName": "Yvonne",
        "employmentType": "Salaried",
        "statusDesc": "New",
        "leadDate": "2023-08-25",
        "leadPhone": "3210987654",
        "leadProductType": "Personal loan",
        "lmsCalling": "Yes",
        "sourceType": "Bank",
        "applicationStatus": "Pending",
        "meetingDate": "2023-08-30"
      },
      {
        "id": 26,
        "leadNo": "LKJH9876Z",
        "leadName": "Zane",
        "employmentType": "Business Owner",
        "statusDesc": "In Progress",
        "leadDate": "2023-08-10",
        "leadPhone": "2109876543",
        "leadProductType": "Home loan",
        "lmsCalling": "No",
        "sourceType": "Online",
        "applicationStatus": "Online",
        "meetingDate": "2023-08-15"
      },
      {
        "id": 27,
        "leadNo": "QWER1234AA",
        "leadName": "Ava",
        "employmentType": "Student",
        "statusDesc": "Completed",
        "leadDate": "2023-07-25",
        "leadPhone": "1098765432",
        "leadProductType": "Car loan",
        "lmsCalling": "Yes",
        "sourceType": "Referral",
        "applicationStatus": "Approved",
        "meetingDate": "2023-07-30"
      },
      {
        "id": 28,
        "leadNo": "MNBV5678AB",
        "leadName": "Benjamin",
        "employmentType": "Freelancer",
        "statusDesc": "New",
        "leadDate": "2023-07-10",
        "leadPhone": "9876543210",
        "leadProductType": "Credit card",
        "lmsCalling": "No",
        "sourceType": "Agent",
        "applicationStatus": "Pending",
        "meetingDate": "2023-07-15"
      },
      {
        "id": 29,
        "leadNo": "ASDF0987AC",
        "leadName": "Charlotte",
        "employmentType": "Self employed",
        "statusDesc": "In Progress",
        "leadDate": "2023-06-25",
        "leadPhone": "8765432109",
        "leadProductType": "Business loan",
        "lmsCalling": "Yes",
        "sourceType": "Bank",
        "applicationStatus": "Online",
        "meetingDate": "2023-06-30"
      },
      {
        "id": 30,
        "leadNo": "ZXCV7654AD",
        "leadName": "David",
        "employmentType": "Salaried",
        "statusDesc": "Completed",
        "leadDate": "2023-06-10",
        "leadPhone": "7654321098",
        "leadProductType": "Education loan",
        "lmsCalling": "No",
        "sourceType": "Online",
        "applicationStatus": "Approved",
        "meetingDate": "2023-06-15"
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
        "loanAmount": "50000"
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
        "loanAmount": "75000"
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
        "loanAmount": "120000"
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
        "loanAmount": "1000000"
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
        "loanAmount": "50000"
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
        "loanAmount": "75000"
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
        "loanAmount": "120000"
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
        "loanAmount": "200000"
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
        "loanAmount": "250000"
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
        "loanAmount": "70000"
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
        "loanAmount": "180000"
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
        "loanAmount": "80000"
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
        "loanAmount": "220000"
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
        "loanAmount": "120000"
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
        "loanAmount": "65000"
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
        "loanAmount": "160000"
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
        "loanAmount": "210000"
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
        "loanAmount": "95000"
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
        "loanAmount": "130000"
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
        "loanAmount": "72000"
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
        "loanAmount": "185000"
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
        "loanAmount": "140000"
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
        "loanAmount": "88000"
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
        "loanAmount": "155000"
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
        "loanAmount": "50000"
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
        "loanAmount": "75000"
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
        "loanAmount": "120000"
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
        "loanAmount": "200000"
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
        "loanAmount": "90000"
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
        "loanAmount": "150000"
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
        "loanAmount": "60000"
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
        "loanAmount": "110000"
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
        "loanAmount": "250000"
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
        "loanAmount": "70000"
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
        "loanAmount": "180000"
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
        "loanAmount": "80000"
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
        "loanAmount": "220000"
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
        "loanAmount": "120000"
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
        "loanAmount": "65000"
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
        "loanAmount": "160000"
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
        "loanAmount": "210000"
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
        "loanAmount": "95000"
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
        "loanAmount": "130000"
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
        "loanAmount": "72000"
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
        "loanAmount": "185000"
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
        "loanAmount": "140000"
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
        "loanAmount": "88000"
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
        "loanAmount": "155000"
      }
    ]
  }
}
