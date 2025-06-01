import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html'
})
export class EditTripComponent implements OnInit {

  form!: FormGroup;
  code = '';
  error = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ds: TripDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code') || '';
    if (!this.code) { this.error = 'No code in route'; return; }

    this.form = this.fb.group({
      code: [{ value: this.code, disabled: true }],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.ds.getTrip(this.code).subscribe(trip => this.form.patchValue(trip));
  }

  submit(): void {
    if (this.form.invalid) return;
    const trip = { ...this.form.getRawValue(), code: this.code };
    this.ds.updateTrip(trip).subscribe({
      next: () => this.router.navigate(['']),
      error: () => this.error = 'Update failed'
    });
  }
}
