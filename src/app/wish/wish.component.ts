import { Component } from '@angular/core';
import { WishModule } from './wish.module';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'wish',
  standalone: true,
  imports: [WishModule],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  items: WishItem[] = [];
  filter: any;
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: WishItem) => {
      const index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    },
      (error: any) => {
        console.error(error);

        alert(error.message);
      }

    )
    this.filter = (item: WishItem) => item;
  }

}
