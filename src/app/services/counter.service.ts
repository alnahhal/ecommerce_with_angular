import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  private price = new BehaviorSubject(0);
  

  getValue(){
    return this.counter.asObservable();
  }

  setValue(newVal : number){
     this.counter.next(newVal);
  }
  getPrice(){
    return this.price.asObservable();
  }

  setPrice(newVal : number){
     this.price.next(newVal);
  }
  
}
