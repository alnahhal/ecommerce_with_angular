import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() productItem !: Product
  @Output() emitProduct: EventEmitter<Product> = new EventEmitter();

  counter: number = 0;

  constructor(private router: Router, private counterService: CounterService) {

  }
  ngOnInit() {
    this.counterService.getValue().subscribe((res) => this.counter = res);


  }
  RedirectToDetails(id: number) {
    console.log(id);
    this.router.navigate(['product-details', id])

  }
  clickedButtonCart(product: Product) {
    if (this.productItem.stock > 0) {
      this.emitProduct.emit(product);
      this.productItem.stock--
    }


    //  if (this.counter <= this.productItem.stock  ) {
    //    this.counterService.setValue(++this.counter) 
    //  }



  }
}