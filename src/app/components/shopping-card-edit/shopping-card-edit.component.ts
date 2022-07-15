import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IdName } from 'src/app/Models/IdName';
import { Product } from 'src/app/Models/Product';
import { ShoppingData } from 'src/app/Models/ShoppingData';
import { ShoppingCardService } from 'src/app/services/shopping-card.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-shopping-card-edit',
  templateUrl: './shopping-card-edit.component.html',
  styleUrls: ['./shopping-card-edit.component.css'],
})
export class ShoppingCardEditComponent implements OnInit {
  myGroup: FormGroup;
  colors: IdName[] | undefined;
  sizes: IdName[] | undefined;
  product!: Product;
  selectedShooping$: Observable<ShoppingData> | undefined;
  constructor(private modalService: ModalService,private shoppingCardService: ShoppingCardService) {
    this.myGroup = new FormGroup({
      color: new FormControl(),
      size: new FormControl(),
    });
  }
    
  ngOnInit(): void {
    this.selectedShooping$ = this.shoppingCardService.getSelectedShoppingData();
    this.selectedShooping$.subscribe(d => {
      this.product = d.product;      
      this.myGroup?.get("color")?.patchValue(this.product.colorId);
      this.myGroup?.get("size")?.patchValue(this.product.sizeId);
    });

    this.shoppingCardService.getColors().subscribe((obj) => {
      this.colors = obj;
    });

    this.shoppingCardService.getSizes().subscribe((obj) => {
      this.sizes = obj;
    });
  }

  save()
  {
    this.product.colorId=  this.myGroup?.get("color")?.value;
    this.product.colorName = this.colors?.filter( c=> c.id == this.myGroup?.get("color")?.value)[0].name;
    this.product.sizeId =  this.myGroup?.get("size")?.value;
    this.product.sizeName =   this.sizes?.filter( c=> c.id == this.myGroup?.get("size")?.value)[0].name;

    this.modalService.close('custom-modal-1');
  }
  
}
