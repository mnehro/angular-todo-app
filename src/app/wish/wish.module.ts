import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, WishListComponent, AddWishFormComponent, WishFilterComponent
  ],
  exports: [WishListComponent, AddWishFormComponent, WishFilterComponent]
})
export class WishModule { }
