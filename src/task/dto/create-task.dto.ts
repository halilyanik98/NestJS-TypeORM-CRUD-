import { IsEmail, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class CreateTaskDto {
    id:number;
    firstName:string;
    lastName:string;
    age:number;
    
    @IsEmail()
    mail:string;

    @IsNotEmpty()
    password:string;
    newTask:string;
}
