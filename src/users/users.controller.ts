import { Controller, Get } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { User } from './models/user.model';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/test')
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
