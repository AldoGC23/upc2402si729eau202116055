import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { EventSummaryComponent } from '../../components/event-summary/event-summary.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, EventSummaryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any[] = [];
  attendees: any[] = [];
  ratings: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEvents();
    this.fetchAttendees();
    this.fetchRatings();
  }

  fetchEvents(): void {
    this.http.get('http://localhost:3000/events').subscribe((data: any) => {
      this.events = data;
    });
  }

  fetchAttendees(): void {
    this.http.get('http://localhost:3000/attendees').subscribe((data: any) => {
      this.attendees = data;
    });
  }

  fetchRatings(): void {
    this.http.get('http://localhost:3000/ratings').subscribe((data: any) => {
      this.ratings = data;
    });
  }

  getAttendeesForEvent(eventId: number): number {
    return this.attendees.filter(attendee => attendee.eventId === eventId && attendee.checkedInAt).length;
  }

  getAverageRating(eventId: number): string {
    const eventRatings = this.ratings.filter(rating => rating.eventId === eventId);
    if (eventRatings.length === 0) {
      return 'No ratings';
    }
    const totalRating = eventRatings.reduce((sum, rating) => sum + rating.rating, 0);
    return (totalRating / eventRatings.length).toFixed(1);
  }
}
