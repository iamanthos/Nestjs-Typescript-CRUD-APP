import { Model } from 'mongoose';
import { Inject } from '@nestjs/common';

import { IPost } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';
import { POST_MODEL_PROVIDER } from '../constant';

export class PostsService {
    constructor(
        @Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<IPost>) { }

    async create(createPostDto: CreatePostDto): Promise<IPost> {
        const createdPost = new this.postModel(createPostDto);
        return await createdPost.save();
    }

    async findAll(): Promise<IPost[]> {
        return await this.postModel.find().exec();
    }
}