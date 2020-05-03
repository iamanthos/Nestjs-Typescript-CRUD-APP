import { Module } from '@nestjs/common';
import { PostsController } from '../posts/post.controller';
import { PostsService } from '../posts/post.service';
import { postsProviders } from '../posts/post.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [...postsProviders, PostsService],
    controllers: [PostsController],
    exports: [PostsService, ...postsProviders],
})
export class PostsModule { }