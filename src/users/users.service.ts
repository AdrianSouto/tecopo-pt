import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './dto/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './inputs/create.user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>) {
  }

  async getUsers(){
    return this.usersRepository.find();
  }

  async createUser(user: CreateUserInput) {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async getUserByUsername(username: string) {
    return this.usersRepository.findOneBy({ name: username });
  }

  async getUserById(id: string) {
    return this.usersRepository.findOneBy({ id });
  }
}
