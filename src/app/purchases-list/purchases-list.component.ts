import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.css']
})
export class PurchasesListComponent {

  counter: number = 0;
  price !: number;
  products: Product[] = []
  constructor(private counterService: CounterService, private activeRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.activeRoute.params.subscribe(param => {
      this.products = JSON.parse(param['products']);
      this.products = this.products.map(product => {
        product.quantity = 1;
        return product;
      })
    })
    this.counterService.getValue().subscribe((res) => this.counter = res);
    this.counterService.getPrice().subscribe((res) => this.price = res);

  }

  decreaseItem(id: number , stockItem : number , qualityItem : number) {
    if (qualityItem > 0) {
      this.products.filter(product => product.id == id).map(product => product.quantity = product.quantity! - 1)
      this.products.filter(product => product.id == id).map(product => product.stock = product.stock! + 1) 
    }
 
    
  }
  increaseItem(id: number , stock : number ) {
    if(stock > 0){
      this.products.filter(product => product.id == id).map(product => product.quantity = product.quantity! + 1)
      this.products.filter(product => product.id == id).map(product => product.stock = product.stock! - 1) 
    }
    

  }

}
