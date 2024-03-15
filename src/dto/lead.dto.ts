import { IsBoolean, IsEnum, IsNotEmpty, IsObject, IsString, ValidateIf, ValidateNested } from "class-validator";

enum LeadDetailType {
    CREATE = 'CREATE',
    EDIT = 'EDIT'
}


class EditLeadDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    firstName: string;

    @IsString()
    emailId: string;

    @IsString()
    employmentType: string;

    @IsString()
    @IsNotEmpty()
    placeOfContact: string;

    @IsString()
    loanPurpose: string;

    @IsString()
    loanAmount: string;

    @IsBoolean()
    @IsNotEmpty()
    whatsAppConsent: boolean;

    @IsString()
    remarks: string;
}

export class LeadDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(LeadDetailType)
    type: LeadDetailType;

    @IsObject()
    @ValidateIf((object) => object.type === LeadDetailType.EDIT)
    @ValidateNested()
    editedDetails: EditLeadDto;
}