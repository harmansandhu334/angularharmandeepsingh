import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',standalone: true
})
export class StockStatusPipe implements PipeTransform {

  transform(inStock: boolean | null | undefined): string {
    return inStock ? 'Available' : 'Unavailable';
  }

}
