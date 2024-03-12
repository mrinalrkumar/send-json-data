import { IsDefined, IsEnum, IsNotEmpty, IsString, ValidateIf, ValidateNested } from "class-validator";

enum AttendanceType {
    IN = 'IN',
    OUT = 'OUT',
    LEAVE = 'LEAVE'
}

class LeaveTypeDto {
    @IsString()
    @IsNotEmpty()
    fromDate: string;

    @IsString()
    @IsNotEmpty()
    toDate: string;

    @IsString()
    @IsNotEmpty()
    leaveType: string;
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
    @ValidateIf((object) => object.status === 'IN')
    @IsNotEmpty()
    @IsDefined()
    inTime: string;

    @IsString()
    @ValidateIf((object) => object.status === 'OUT')
    @IsNotEmpty()
    @IsDefined()
    outTime: string;

    @ValidateIf((object) => object.status === 'LEAVE')
    @ValidateNested()
    leaveDetails: LeaveTypeDto;
}