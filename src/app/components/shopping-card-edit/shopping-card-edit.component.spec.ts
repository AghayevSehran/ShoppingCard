import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardEditComponent } from './shopping-card-edit.component';

describe('ShoppingCardEditComponent', () => {
  let component: ShoppingCardEditComponent;
  let fixture: ComponentFixture<ShoppingCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
