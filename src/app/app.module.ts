import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCardEditComponent } from './components/shopping-card-edit/shopping-card-edit.component';
import { ShoppingCardListComponent } from './components/shopping-card-list/shopping-card-list.component';
import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCardEditComponent,
    ShoppingCardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
