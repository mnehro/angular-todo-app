import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { WishItem } from '../../shared/models/wishItem';
import { catchError } from 'rxjs';
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

  getWishes(): Observable<HttpEvent<WishItem[]>> {
    let options = this.getStandardOptions();

    return this.http.get<WishItem[]>('wishes.json', options).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 0) {
      console.error('There is an issue with client or network:', error.error);

    } else {
      console.error('Server side error: ', error.error);

    }
    return throwError(() => new Error('Cannot retrieve wishes from the server please try again'));
  }

  private addWish(wish: WishItem) {
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
