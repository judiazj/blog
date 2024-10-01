import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BlogModule,
    MongooseModule.forRoot('mongodb://localhost:27017/blog'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
