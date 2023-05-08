import { registerAs } from "@nestjs/config"; 

export default registerAs('config',()=>{
    return {
        JWT_SECRET:process.env.JWT_SECRET,
        TITLE:process.env.TITLE,
        TYPE_DB:process.env.TYPE_DB,
        HOST_DB:process.env.HOST_DB,
        PORT_DB:process.env.PORT_DB,
        USERNAME_DB:process.env.USERNAME_DB,
        PASSWORD_DB:process.env.PASSWORD_DB,
        DATABASE_DB:process.env.DATABASE_DB
    }
});