import { HttpException, HttpStatus } from '@nestjs/common'

export class CustomException extends HttpException {
  constructor(error: String = 'Custom Exception') {
    super(error, HttpStatus.SEE_OTHER);
  }
}