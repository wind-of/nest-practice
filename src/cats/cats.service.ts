import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './interfaces/cat.interface'

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      name: "Boris",
      age: 15,
      mass: 9
    }
  ];

  findAll(): Cat[] {
    return this.cats
  }

  findOne(id: number): Cat | string{
    return this.cats[id] || `There are no cat by id ${id}`;
  }

  createCat(cat: Cat) {
    this.cats.push(cat);
  }
}
