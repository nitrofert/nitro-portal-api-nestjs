import { Inject, Injectable } from '@nestjs/common';
import config from './configuration/configuration';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>) {

  }
  getHello(): string {
    
    return this.configService.TITLE;
  }
}
