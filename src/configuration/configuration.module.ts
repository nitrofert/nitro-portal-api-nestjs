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
          TYPE_DB:Joi.string().required(),
          HOST_DB:Joi.string().required(),
          PORT_DB:Joi.number().required(),
          USERNAME_DB:Joi.string().required(),
          PASSWORD_DB:Joi.string().required(),
          DATABASE_DB:Joi.string().required(),

        })
      })],
})
export class ConfigurationModule {}
