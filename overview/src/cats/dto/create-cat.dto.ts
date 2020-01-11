import { IsInt, IsString } from 'class-validator'

// export class CreateCatDto {
//   readonly name: string;
//   readonly age: number;
//   readonly breed: string;
// }

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;

  @IsString()
  readonly id: string;
}