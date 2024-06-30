import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WishItem } from '../shared/models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getWishes() : Observable<HttpEvent<WishItem[]>> {
    let options = this.getStandardOptions();
    return this.http.get<WishItem[]>('wishes.json', options);
  }

  private addWish(wish : WishItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value');
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });
    this.http.post('wishes', wish, options);
  }
}
