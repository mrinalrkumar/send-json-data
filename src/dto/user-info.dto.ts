import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UserInfoDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
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
