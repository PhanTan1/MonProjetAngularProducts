import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getAllProducts(): IProduct[]{
    return [
    { id : 'P100', name: 'Cafe', unitPrice : 2.5},
    { id : 'P200', name: 'The', unitPrice : 2},
    { id : 'P300', name: 'Jus d\'Orange', unitPrice : 3},
    { id : 'P400', name: 'Coca-Cola', unitPrice : 2.5}
    ];
  }
}
