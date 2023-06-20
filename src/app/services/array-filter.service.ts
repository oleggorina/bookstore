import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayFilterService {

  constructor() { }

  filterArray(array: any[], value: any): any[] {
    return array.filter(item => item.type === value);
  }
}
