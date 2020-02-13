import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { UserService } from '../services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'user' })
  public execute() {
    return this.userService.get();
  }
}
