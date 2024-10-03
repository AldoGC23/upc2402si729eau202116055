import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private apiUrl = 'http://localhost:3000/ratings';  // URL de la fake API para ratings

  constructor(private http: HttpClient) {}


  addRating(rating: any): Observable<any> {
    return this.http.post(this.apiUrl, rating);
  }


  getRatingsByEventId(eventId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?eventId=${eventId}`);
  }
}
