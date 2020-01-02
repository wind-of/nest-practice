export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly mass: number;
  readonly breed?: string;
}