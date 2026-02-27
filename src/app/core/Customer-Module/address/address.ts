import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface AddressModel {
  label: string;
  house: string;
  area: string;
  landmark?: string;
  city: string;
  pincode: string;
}

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './address.html',
  styleUrl: './address.css'
})
export class Address {

  showAddressForm = false;

  selectedIndex: number | null = null;

  /* No dummy data */
  addresses: AddressModel[] = [];

  newAddress: AddressModel = {
    label: 'Home',
    house: '',
    area: '',
    landmark: '',
    city: '',
    pincode: ''
  };

  submitAddress() {

    if (!this.newAddress.house || !this.newAddress.area || !this.newAddress.city || !this.newAddress.pincode) {
      return;
    }

    this.addresses.push({ ...this.newAddress });

    /* Auto select last added address */
    this.selectedIndex = this.addresses.length - 1;

    /* Reset form */
    this.newAddress = {
      label: 'Home',
      house: '',
      area: '',
      landmark: '',
      city: '',
      pincode: ''
    };

    this.showAddressForm = false;
  }

}