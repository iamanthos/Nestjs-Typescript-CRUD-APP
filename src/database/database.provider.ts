import * as mongoose from 'mongoose';
import { DB_PROVIDER } from '../constant';

export const databaseProvider = [
    {
        provide: DB_PROVIDER,
        useFactory: async () => {
            return await mongoose.connect('mongodb+srv://ankur:password12345@ideas-ozbou.mongodb.net/test?retryWrites=true&w=majority');
        },
    },
];