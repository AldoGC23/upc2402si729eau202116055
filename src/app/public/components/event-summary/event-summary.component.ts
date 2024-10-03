import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.css'],
  imports: [TranslateModule]
})
export class EventSummaryComponent {
  @Input() event: any;
  @Input() attendees!: number;
  @Input() averageRating!: string;
}
