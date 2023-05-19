import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {
  @Input() product !: Product;
  products: Array<Product> = []
  stringProduct !: string

  ngOnChanges(): void {
    this.products = this.products.filter(product => product != undefined)
    this.products.push(this.product)
    this.stringProduct = JSON.stringify(this.products)
  }


}
