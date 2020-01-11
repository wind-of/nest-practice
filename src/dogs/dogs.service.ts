import { Injectable } from '@nestjs/common'

@Injectable()
export class DogsService {
  getNum(): number {
    return 5
  }
}
