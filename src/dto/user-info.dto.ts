import { IsEnum, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserInfoDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
}

export class DiarySummaryDTO {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNumber()
  @IsOptional()
  fromDate: number;

  @IsISO8601()
  @IsOptional()
  toDate: string;
}

export class IdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

enum DiarySummaryType {
  HL = 'HL',
  PL = 'PL',
}

export class DiarySummaryDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsEnum(DiarySummaryType)
  @IsNotEmpty()
  type: DiarySummaryType;
}
