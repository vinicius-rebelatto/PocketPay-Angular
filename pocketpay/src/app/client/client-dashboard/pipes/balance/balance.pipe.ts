import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balance'
})
export class BalancePipe implements PipeTransform {

  transform(balance: number): string {
    return `R$ ${balance}`;
  }

}
