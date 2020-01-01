import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  
  findAll(): String {
    return "You would get all the cats, but they are not."
  }

  findOne(id: Number): String {
    return `You would get the cat by id ${id}, but no`
  }
}
