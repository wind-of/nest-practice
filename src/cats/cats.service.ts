import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getNum(): number {
    return 15
  }
}
