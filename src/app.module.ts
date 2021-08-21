import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dev:1234@cluster0.eisdg.mongodb.net/test',
        { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
