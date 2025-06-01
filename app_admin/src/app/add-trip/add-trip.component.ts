import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.component.html'
})
export class AddTripComponent {

  form: FormGroup;
  error = '';

  constructor(
    fb: FormBuilder,
    private ds: TripDataService,
    private router: Router
  ) {
    this.form = fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.form.invalid) return;
    this.ds.addTrip(this.form.value).subscribe({
      next: () => this.router.navigate(['']),
      error: () => this.error = 'Add failed'
    });
  }
}
