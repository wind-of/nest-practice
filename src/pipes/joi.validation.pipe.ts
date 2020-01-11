import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { Schema } from 'hapi__joi'

export class JoiValidationPipe implements PipeTransform{
  constructor(private readonly schema: Schema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);

    if(error) {
      throw new BadRequestException('Validation error');
    }

    return value
  }
}