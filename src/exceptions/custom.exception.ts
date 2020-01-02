import { HttpException, HttpStatus } from '@nestjs/common'

export class CustomException extends HttpException {
  constructor() {
    super('Custom exception', HttpStatus.SEE_OTHER);
  }
}