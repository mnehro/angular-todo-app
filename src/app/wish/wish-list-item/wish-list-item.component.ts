import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { WishItem } from '../../../shared/models/wishItem';
import { EventService } from '../../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish!: WishItem;
  constructor(private events: EventService) {

  }

  toggleFullfilled(): void {
    this.wish.isComplete = !this.wish.isComplete;
  }
  get cssProperties(): object {
    return {
      'strikeout text-muted': this.wish.isComplete
    };
  }
  removeWish(): void {
    this.events.emit('removeWish', this.wish);
  }
}
