import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../configuration/configuration'

@Module({
    providers: [...databaseProviders, ConfigService],
    exports: [...databaseProviders],
  })
export class DatabaseModule {}
