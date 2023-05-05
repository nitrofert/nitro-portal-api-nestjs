import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import config from './configuration';
import * as Joi from 'joi';

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: enviroments[process.env.NODE_ENV]  || '.env',
        load: [config],
        isGlobal:true,
        validationSchema: Joi.object({
          JWT_SECRET: Joi.string().required(),
          TITLE:Joi.string().required(),
        })
      })],
})
export class ConfigurationModule {}
