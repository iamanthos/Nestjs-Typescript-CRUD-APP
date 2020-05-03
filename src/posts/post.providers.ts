import { Connection } from 'mongoose';

import { PostSchema } from '../posts/post.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constant';

export const postsProviders = [
    {
        provide: POST_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Post', PostSchema),
        inject: [DB_PROVIDER],
    },
];