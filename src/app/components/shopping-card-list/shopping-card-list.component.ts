import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IdName } from 'src/app/Models/IdName';
import { ShoppingData } from 'src/app/Models/ShoppingData';
import { ShoppingCardService } from 'src/app/services/shopping-card.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-shopping-card-list',
  templateUrl: './shopping-card-list.component.html',
  styleUrls: ['./shopping-card-list.component.css'],
})
export class ShoppingCardListComponent implements OnInit {
  title = 'shopping-UI';
  shoppingId:number = 0;
  editMode: any;
  shoppingCard$: Observable<ShoppingData[]> | undefined;
  totalPrice$: Observable<number> | undefined;
  colors: IdName[] | undefined;
  sizes: IdName[] | undefined;
  values = [
    { id: 3432, name: 'Recent' },
    { id: 3442, name: 'Most Popular' },
    { id: 3352, name: 'Rating' },
  ];
  constructor(
    private shoppingCardService: ShoppingCardService,
    private router: Router,
    private modalService: ModalService
  ) {}

  getShoppingCard(): void {
    this.shoppingCard$ = this.shoppingCardService.getShoppingCards();
  }

  getTotalPrice() {
    this.totalPrice$ = this.shoppingCardService.calculateTotal();
  }

  remove(id: number) {
    this.shoppingCardService.remove(id);
  }

  edit(id: number) {
    this.shoppingCardService.setShoppingDataById(id);
    this.openModal('custom-modal-1');
  }

  ngOnInit(): void {
    this.getShoppingCard();
    this.getTotalPrice();
    this.shoppingCardService.getColors().subscribe((obj) => {
      this.colors = obj;
    });
    this.shoppingCardService.getSizes().subscribe((obj) => {
      this.sizes = obj;
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
