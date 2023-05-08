import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from './users.controller';


@Module({
  imports:[DatabaseModule],
  providers: [UsersService, ...usersProviders],
  controllers: [UsersController]
})
export class UsersModule {}
