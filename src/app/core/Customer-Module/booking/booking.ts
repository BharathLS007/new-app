import { Component } from '@angular/core';
import { Header } from '../../Shared-Module/header/header';
import { Navbar } from '../../Shared-Module/navbar/navbar';
@Component({
  selector: 'app-booking',
  imports: [Header, Navbar],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {

}
