import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: Repository<Users>,
      ) {}
    
      async findAll(): Promise<Users[]> {
        return this.usersRepository.find();
      }
}
