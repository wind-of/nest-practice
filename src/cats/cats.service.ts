import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto'
import { ICat } from './interfaces/cat.interface'

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = [
    {
      name: "Boris",
      age: 15,
      mass: 9
    }
  ];

  findAll(): ICat[] {
    return this.cats;
  }

  findOne(id: number): ICat | string{
    return this.cats[id] || `There are no cat by id ${id}`;
  }

  createCat(cat: ICat) {
    this.cats.push(cat);
  }
}
