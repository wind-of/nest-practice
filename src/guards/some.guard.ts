import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CustomException } from 'src/exceptions/custom.exception';

// Guards are executed after each middleware, but before any interceptor or pipe.

@Injectable()
export class SomeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const metadata = this.reflector.get<string[]>('meta', context.getHandler());

    return true // handler will work
    // return false - throws ForbiddenException, handler will not work
    // throw new CustomException('Message') - throws CustomException, handler will not work
  }
}
