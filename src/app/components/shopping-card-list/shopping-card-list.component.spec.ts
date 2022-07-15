import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardListComponent } from './shopping-card-list.component';

describe('ShoppingCardListComponent', () => {
  let component: ShoppingCardListComponent;
  let fixture: ComponentFixture<ShoppingCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
