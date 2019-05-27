import { Component, OnInit } from '@angular/core';
import { IProduct } from "src/app/domain/IProduct";
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];



  constructor(private service: ProductsService) { } // Constructor injection

  ngOnInit(): void {
    this.products = this.service.getAllProducts();
  }

}
