import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto'
import { ICat } from './interfaces/cat.interface'

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = [
    {
      name: "Boris",
      age: 15,
      mass: 9,
      breed: 'Poroda'
    }
  ];

  findAll(): ICat[] {
    return this.cats;
  }

  findOne(id: number): ICat | string{
    return this.cats[id] || `There are no cat by id ${id}`;
  }

  create(cat: ICat) {
    return this.cats.push(cat);
  }

  update(cat: ICat): string {
    return `YES, YES, YES, YES, YES`
  }

  delete(id: number): string {
    return `NO, NO, NO, NO, NO`
  }
}
