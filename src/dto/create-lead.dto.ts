import { Type } from "class-transformer";
import { IsBoolean, IsDefined, IsEnum, IsISO8601, IsNotEmpty, IsObject, IsOptional, IsString, Max, ValidateIf, ValidateNested } from "class-validator";

enum ResidentType {
    INDIAN = 'INDIAN',
    NRI = 'NRI'
}

enum EmploymentType {
    SALARIED = 'Salaried',
    SELF_EMPLOYED = 'Self Employed',
    SELF_EMPLOYED_PROFESSIONAL = 'Self Employed Professional'
}

enum IncomeRange {
    BELOW5 = 'Below 5 lakhs',
    BETWEEN5TO10 = 'Between 5 lakhs to 10 lakhs',
    ABOVE10 = 'Above 10 lakhs'
}

enum IncomeBased {
    ITR = 'ITR',
    OTHERS = 'Others'
}

enum AppraisalMethod {
    GRSP = 'Gross Receipts Surrogate Program',
    GST = 'GST Surrogate Program',
    BSP = 'Banking Surrogate Program',
    RTR = 'RTR Based Refinance Program'
}

enum LoanPurpose {
    HOME_LOAN = 'Home Loan',
    LAND_PURCHASE = 'Land Purchase',
    CONSTRUCTION = 'Construction',
    PLOT_EQUITY= 'Plot Equity',
    HOME_EQUITY = 'Home Equity'
}

enum ArchivioSource {
    BSE = 'BSA',
    BROKER = 'Broker',
    OTHER = 'Other'
}

enum MeetingMode {
    CALL = 'Call',
    INPERSON = 'In Person'
}

class PersonalDetails {
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(ResidentType)
    residentType: ResidentType;

    @ValidateIf((object) => object.residentType === 'NRI')
    @IsString()
    @IsDefined()
    emailId: string;

    @ValidateIf((object) => object.residentType === 'NRI')
    @IsString()
    @IsDefined()
    countryCode: string;

    @IsString()
    @IsNotEmpty()
    mobileNumber: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(EmploymentType)
    employmentType: EmploymentType;

    @IsString()
    @IsNotEmpty()
    monthlyIncode: string;

    @IsString()
    @IsNotEmpty()
    placeOfContact: string;

    @IsString()
    @IsNotEmpty()
    @Max(100)
    customerAddress: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(IncomeRange)
    incomeRange: IncomeRange;

    @IsString()
    @IsNotEmpty()
    @IsEnum(IncomeBased)
    incomeBased: IncomeBased;

    @IsString()
    @IsNotEmpty()
    incomeBasedValue: string;
}

class LoanDetails {
    @IsString()
    @IsNotEmpty()
    @IsEnum(LoanPurpose)
    loanPurpose: LoanPurpose;

    @IsString()
    @IsNotEmpty()
    loanAmount: string;

    @IsBoolean()
    @IsNotEmpty()
    propertySelected: boolean;

    @ValidateIf((object) => object.propertySelected === true)
    @IsDefined()
    @IsString()
    propertyLocation: string;

    @ValidateIf((object) => object.propertySelected === true)
    @IsDefined()
    @IsString()
    propertyName: string;
    
    @IsString()
    @IsNotEmpty()
    @IsEnum(AppraisalMethod)
    appraisalMethod: AppraisalMethod;
}

class SourceDetails {
    @IsString()
    @IsNotEmpty()
    sourceType: string;

    @IsBoolean()
    @IsOptional()
    archivioSource: boolean;

    @ValidateIf((object) => object.archivioSource === true)
    @IsDefined()
    @IsEnum(ArchivioSource)
    archivioSubSource: ArchivioSource;

    @IsBoolean()
    bankreach: boolean;

    @IsString()
    @IsNotEmpty()
    originBranch: string;

    @IsString()
    @IsNotEmpty()
    originPlace: string;

    @IsString()
    subventionFees: string;

    @IsString()
    @IsEnum(MeetingMode)
    @IsNotEmpty()
    meetingMode: MeetingMode;

    @IsNotEmpty()
    @IsISO8601()
    meetingDateAndTime: string;

    @IsString()
    promoCode: string;

    @IsString()
    campaign: string;
}

class OtherInfo {
    @IsBoolean()
    @IsNotEmpty()
    lmsCalling: boolean;

    @ValidateIf((object) => object.lmsCalling === true)
    @IsDefined()
    @IsString()
    remarks: string;

    @ValidateIf((object) => object.lmsCalling === false)
    @IsDefined()
    @IsISO8601()
    dateOfConversion: string;

    @ValidateIf((object) => object.lmsCalling === false)
    @IsDefined()
    @IsString()
    noOfDays: string;
}

export class CreateLeadDto {
    @ValidateNested()
    @Type(() => PersonalDetails)
    personalDetails: PersonalDetails

    @ValidateNested()
    @Type(() => LoanDetails)
    loanDetails: LoanDetails

    @ValidateNested()
    @Type(() => OtherInfo)
    otherInfo: OtherInfo

    @ValidateNested()
    @Type(() => SourceDetails)
    sourceDetails: SourceDetails;
}