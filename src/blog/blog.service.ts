import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async createPost(createBlogDto: CreateBlogDto): Promise<Blog> {
    const newPost = await this.blogModel.create(createBlogDto);
    return newPost;
  }

  async getPosts(): Promise<Blog[]> {
    const blogs = await this.blogModel.find();
    return blogs;
  }

  async getPost(id: string): Promise<never | Blog> {
    const blog = await this.blogModel.findById(id);

    if (!blog) throw new NotFoundException('El blog no existe');

    return blog;
  }

  async updatePost(
    id: string,
    updateBlogDto: UpdateBlogDto,
  ): Promise<never | Blog> {
    const blog = await this.blogModel.findByIdAndUpdate(id, updateBlogDto, {
      new: true,
    });

    if (!blog) throw new NotFoundException('El blog no existe');

    return blog;
  }
}
