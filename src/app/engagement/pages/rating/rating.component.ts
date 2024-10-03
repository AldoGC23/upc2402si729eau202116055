import { Component } from '@angular/core';
import { RatingService } from '../../services/rating.service';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating',
  standalone: true,
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  imports: [FormsModule, TranslateModule],
  providers: [RatingService]
})
export class RatingComponent {
  ticketIdentifier = '';
  ratingValue: number | null = null;
  validationMessage = '';

  constructor(private ratingService: RatingService, private http: HttpClient) {}

  submitRating() {

    if (this.ticketIdentifier && this.ratingValue !== null) {

      this.http.get(`http://localhost:3000/attendees?ticketIdentifier=${this.ticketIdentifier}`)
        .subscribe((attendees: any) => {
          const attendee = attendees[0];

          if (!attendee) {
            this.validationMessage = 'Invalid Ticket Identifier';
            return;
          }

          if (!attendee.checkedInAt) {
            this.validationMessage = 'You can only rate events you have attended to';
            return;
          }


          const newRating = {
            attendeeId: attendee.id,
            eventId: attendee.eventId,
            rating: this.ratingValue,
            ratedAt: new Date().toISOString()
          };

          this.ratingService.addRating(newRating).subscribe(() => {
            this.validationMessage = 'Event successfully rated';
          });
        });
    } else {
      this.validationMessage = 'Please enter a valid rating and ticket identifier';
    }
  }
}
