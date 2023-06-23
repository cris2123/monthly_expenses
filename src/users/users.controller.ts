import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller()
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('/test')
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
