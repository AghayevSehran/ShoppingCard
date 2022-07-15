import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCardEditComponent } from './components/shopping-card-edit/shopping-card-edit.component';
import { ShoppingCardListComponent } from './components/shopping-card-list/shopping-card-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/shoping', pathMatch: 'full' },
  { path: 'edit/:id', component: ShoppingCardEditComponent },
  { path: 'shoping', component: ShoppingCardListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
