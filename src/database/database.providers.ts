import { ConfigService, ConfigType } from '@nestjs/config';
import { Config } from 'src/configuration/config.enum';
import { DataSource } from 'typeorm';




export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    
    inject:[ConfigService],
    //useFactory: async (  configService: ConfigType<typeof config>) => {
        useFactory: async (  configService: ConfigService) => {
    
      const dataSource = new DataSource({
        type: 'mysql',
        //host: 'localhost',
        /*port: config['PORT_DB'],
        username: config['USERNAME_DB'],
        password: config['PASSWORD_DB'],
        database: config['DATABASE_DB'],*/

        
        host: configService.get(Config.HOST_DB),
        port: configService.get(Config.PORT_DB),
        username:  configService.get(Config.USERNAME_DB),
        password:  configService.get(Config.PASSWORD_DB),
        database:  configService.get(Config.DATABASE_DB),
        

        /*host: configService.HOST_DB,
        port: parseInt(configService.PORT_DB),
        username:  configService.USERNAME_DB,
        password:  configService.PASSWORD_DB,
        database:  configService.DATABASE_DB,*/


        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
    
  },
];