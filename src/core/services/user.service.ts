import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  public get() {
    return 'Hello world';
  }
}
