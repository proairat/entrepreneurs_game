import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
  compose(...fns: any) {
    return (...params: Array<number>) => {
      return fns.reduceRight(
        (parameters: Array<number> | number, current: any) => {
          return current.apply(
            null,
            Array.isArray(parameters) ? parameters : [parameters]
          );
        },
        params
      );
    };
  }
}
