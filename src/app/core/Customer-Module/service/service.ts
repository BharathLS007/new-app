import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

interface WorkItem {
  name: string;
  qty: number;
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatCardModule
  ],
  templateUrl: './service.html',
  styleUrl: './service.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Service {

  works: WorkItem[] = [];
  newWork = '';
  showPopup = false;
  selectedWorkType = '';
  workTypes = [
    'Install fan',
    'Repair wiring',
    'Replace switch',
    'Install light',
    'Other'
  ];

  backImg = '/images/backimg1.png';

  /* ================= DATE & TIME ================= */

  showDateTimePopup = false;

  selectedDate: Date | null = new Date();
  tempSelectedDate: Date | null = null;

  tempSelectedTimeSlot: any = null;
  selectedTimeSlot: any = null;

  timeSlots = [
    { label: 'Morning', time: '9:00 AM - 12:00 PM' },
    { label: 'Afternoon', time: '12:00 PM - 4:00 PM' },
    { label: 'Evening', time: '4:00 PM - 7:00 PM' },
    { label: 'Night', time: '7:00 PM - 9:00 PM' }
  ];

  /* ================= Calendar Style Logic ================= */

  dateClass = (date: Date): string => {
    if (!this.selectedDate) return '';

    const isSameDate =
      date.getDate() === this.selectedDate.getDate() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getFullYear() === this.selectedDate.getFullYear();

    return isSameDate ? 'selected-date' : '';
  };

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.newWork = '';
  }

  addWork() {
    const value = this.newWork.trim();
    if (!value) return;

    this.works.push({
      name: value,
      qty: 1
    });

    this.closePopup();
  }

  incrementQty(index: number) {
    this.works[index].qty++;
  }

  decrementQty(index: number) {
    if (this.works[index].qty > 1) {
      this.works[index].qty--;
    }
  }

  openDateTimePopup() {
    this.tempSelectedDate = this.selectedDate ?? new Date();
    this.tempSelectedTimeSlot = this.selectedTimeSlot;
    this.showDateTimePopup = true;
  }

  confirmDateTime() {
    this.selectedDate = this.tempSelectedDate;
    this.selectedTimeSlot = this.tempSelectedTimeSlot;
    this.showDateTimePopup = false;
  }
}