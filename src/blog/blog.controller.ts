import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { ValidateIdPipe } from 'src/pipes/validate-id.pipe';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  createPost(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.createPost(createBlogDto);
  }

  @Get()
  getAllPost() {
    return this.blogService.getPosts();
  }

  @Get('/:id')
  getPostById(@Param('id', ValidateIdPipe) id: string) {
    return this.blogService.getPost(id);
  }

  @Put('/:id')
  updatePost(
    @Param('id', ValidateIdPipe) id: string,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    return this.blogService.updatePost(id, updateBlogDto);
  }
}
