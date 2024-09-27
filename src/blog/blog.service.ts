import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './schemas/blog.schema';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {

    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) { }

    async createPost(createBlogDto: CreateBlogDto): Promise<Blog> {
        const newPost = await this.blogModel.create(createBlogDto);
        return newPost;
    }

    getPosts() {
        return [{
            "id": 1,
            "title": "My First Blog Post",
            "content": "This is the content of my first blog post.",
            "category": "Technology",
            "tags": ["Tech", "Programming"],
            "createdAt": "2021-09-01T12:00:00Z",
            "updatedAt": "2021-09-01T12:00:00Z"
        }]
    }
}
