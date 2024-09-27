import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('/blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) { }

    @Post()
    createPost(@Body() createBlogDto: CreateBlogDto) {
        return this.blogService.createPost(createBlogDto);
    }

    @Get()
    getAllPost() {
        return this.blogService.getPosts();
    }
}
