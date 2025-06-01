import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
})
export class TripCardComponent {
  @Input() trip: any;
  constructor(private router: Router) { }
  editTrip() { this.router.navigate(['/edit', this.trip.code]); }
}
