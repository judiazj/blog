import { IsString } from "class-validator";


export class CreateBlogDto {
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsString()
    category: string;

    @IsString({ each: true })
    tags: string;
}