// src/app/trip-listing/trip-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TripDataService } from '../services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';   // NEW

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],  // NEW
  templateUrl: './trip-listing.component.html',
})
export class TripListingComponent implements OnInit {

  trips: any[] = [];

  constructor(
    private ds: TripDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ds.getTrips().subscribe(trips => this.trips = trips);
  }

  addTrip(): void {
    this.router.navigate(['/add']);
  }
}
