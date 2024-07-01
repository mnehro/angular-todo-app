import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactModule } from './contact/contact.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WishComponent, ContactModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { }
