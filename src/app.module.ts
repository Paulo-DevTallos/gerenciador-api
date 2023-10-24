import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://db:27017/nest-gerenciador'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
