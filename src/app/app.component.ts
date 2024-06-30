import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from '../shared/services/EventService';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  items: WishItem[] = [
    new WishItem('To learn angular'),
    new WishItem('Get coffe', true),
    new WishItem('Find grass that cut itself')
  ];
  filter: any;
  constructor() {
    events.listen('removeWish', (wish: WishItem) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }
  ngOnInit(): void {
    this.filter = (item: WishItem) => item;
  }

}
