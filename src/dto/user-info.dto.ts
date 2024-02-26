import { IsNotEmpty, IsString } from "class-validator";

export class UserInfoDto {
    @IsString()
    @IsNotEmpty()
    userId: string
}