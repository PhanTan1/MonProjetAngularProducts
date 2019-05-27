import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/domain/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [
    { id : 'P100', name: 'Cafe', unitPrice : 2.5},
    { id : 'P200', name: 'The', unitPrice : 2},
    { id : 'P300', name: 'Jus d\'Orange', unitPrice : 3},
    { id : 'P400', name: 'Coca-Cola', unitPrice : 2.5}
  ]

  constructor() { }

  ngOnInit() {
  }

}
