import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'

// The CatsMiddleware: Functional and Class Middleware examples

// @Injectable()
// export class CatsMiddleware implements NestMiddleware{
//   use(req: Request, res: Response, next: Function) {
//     console.log('Hi, Console.');
//     next()
//   }
// }

// Consider using the function middleware (like below), if your middleware doesn't need any dependencies

export function CatsMiddleware(req: Request, res: Response, next: Function) {
  console.log('Hi, Console.');
  next()
}