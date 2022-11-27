import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "averagePrefix"})
export class AveragePrefixPipe implements PipeTransform{
  transform(value: number | undefined): string {
    return "avg. " + value;
  }
}
