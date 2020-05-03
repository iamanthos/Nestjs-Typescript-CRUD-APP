import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from '../posts/post.service';
import { IPost } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
    
    constructor(private readonly postsService: PostsService) { console.log('HelloConstruct'); }

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        this.postsService.create(createPostDto);
    }

 @Get()
    async findAll(): Promise<IPost[]> {
        return this.postsService.findAll();
    }
}