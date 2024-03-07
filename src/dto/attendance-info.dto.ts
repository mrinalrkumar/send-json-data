import { IsDefined, IsEnum, IsNotEmpty, IsString, ValidateIf, ValidateNested } from "class-validator";

enum AttendanceType {
    I = 'I',
    O = 'O',
    L = 'L'
}

class LeaveTypeDto{
    @IsString()
    @IsNotEmpty()
    fromDate: string;

    @IsString()
    @IsNotEmpty()
    toDate: string;

    @IsString()
    @IsNotEmpty()
    remark: string;
}
export class AttendanceDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsEnum(AttendanceType)
    @IsNotEmpty()
    @IsDefined()
    status: AttendanceType;

    @IsString()
    @ValidateIf((object) => object.status === 'I')
    @IsNotEmpty()
    @IsDefined()
    inTime: string;

    @IsString()
    @ValidateIf((object) => object.status === 'O')
    @IsNotEmpty()
    @IsDefined()
    outTime: string;

    @ValidateIf((object) => object.status === 'L')
    @ValidateNested()
    leaveDetails: LeaveTypeDto;
}