import { Injectable } from '@nestjs/common'
import { CreateCatDto } from './dto/create-cat.dto'
import { ICat } from './interfaces/cat.interface'
import { UpdateCatDto } from './dto/update-cat.dto'
import { CustomException } from 'src/exceptions/custom.exception';

@Injectable()
export class CatsService {
  private readonly cats: ICat[] = [
    {
      name: "Boris",
      age: 15,
      breed: 'Poroda',
      id: '2152121fqea'
    }
  ];
  private findCatById(id: string): ICat {
    const soughtForItem: ICat | undefined = this.cats.find(cat => cat.id === id);
    
    if(soughtForItem === undefined) {
      throw new CustomException(`There are no item by id ${id}`)
    }
    
    return soughtForItem
  }
  private removeCatById(id: string): void {
    this.cats.filter(cat => cat.id !== id);
  }



  findAll(): ICat[] {
    return this.cats
  }

  findOne(id: string): ICat | string{
    return this.findCatById(id)
  }

  create(cat: ICat): ICat {
    this.cats.push(cat);
    return cat
  }

  update(updatedCat: UpdateCatDto, id: string): ICat {
    const soughtForCat = this.findCatById(id);
    Object.keys(updatedCat).forEach(key => soughtForCat[key] = updatedCat[key]);

    return soughtForCat
  }

  delete(id: string): ICat {
    const soughtForCat = this.findCatById(id);

    this.removeCatById(id);

    return soughtForCat
  }
}
