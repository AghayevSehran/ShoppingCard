import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { IdName } from '../Models/IdName';
import { Product } from '../Models/Product';
import { ShoppingData } from '../Models/ShoppingData';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCardService {
  colors: IdName[] = [new IdName(1, 'blue'), new IdName(2, 'Red')];
  size: IdName[] = [new IdName(1, 'X'), new IdName(2, 'XL')];
  products: Product[] = [
    new Product(
      1,
      'Test 1',
      'D123423423',
      'DTR',
      1,
      'blue',
      1,
      'X',
      120,
      'assets/images/items/1.jpg'
    ),
    new Product(
      2,
      'Test 2',
      'D123423423',
      'DTR',
      1,
      'blue',
      1,
      'X',
      120,
      'assets/images/items/2.jpg'
    ),
    new Product(
      3,
      'Test 3',
      'D1234234233',
      'DTR3',
      2,
      'red',
      2,
      'XL',
      120,
      'assets/images/items/3.jpg'
    ),
  ];
  shoppingData: ShoppingData[] = [
    new ShoppingData(1, this.products[0], 1),
    new ShoppingData(2, this.products[1], 2),
    new ShoppingData(3, this.products[2], 1),
  ];
  selectedShopping$ = new Subject<ShoppingData>();
  cardDataChanged$ = new BehaviorSubject<ShoppingData[]>(this.shoppingData);
  totalChanged$ = new BehaviorSubject<number>(0);

  getShoppingCards(): Observable<ShoppingData[]> {
    return this.cardDataChanged$;
  }

  getColors(): Observable<IdName[]> {
    let t = Object.assign([], this.colors) as IdName[];
    return of(t);
  }

  getSizes(): Observable<IdName[]> {
    let t = Object.assign([], this.size) as IdName[];
    return of(t);
  }

  getSelectedShoppingData(): Observable<ShoppingData> {
    return this.selectedShopping$;
  }

  setShoppingDataById(id: number): Observable<ShoppingData> {
    this.selectedShopping$.next(
      this.shoppingData.filter((o) => o.id === id)[0]
    );
    return this.selectedShopping$;
  }

  update(id: number): Observable<ShoppingData> {
    this.selectedShopping$.next(
      this.shoppingData.filter((o) => o.id === id)[0]
    );
    return this.selectedShopping$;
  }

  calculateTotal(): Observable<number> {
    this.totalChanged$.next(
      this.shoppingData.reduce(function (acc, obj) {
        return acc + obj.quantity * obj.product.price;
      }, 0)
    );
    return this.totalChanged$;
  }

  remove(id: number) {
    const indexOfObject = this.shoppingData.findIndex((o) => {
      return o.product.id === id;
    });
    this.shoppingData.splice(indexOfObject, 1);
    this.cardDataChanged$.next(this.shoppingData);
    this.calculateTotal();
  }
}
