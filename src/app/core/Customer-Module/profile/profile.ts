import { Component } from '@angular/core';
import { Header } from '../../Shared-Module/header/header';
import { Navbar } from '../../Shared-Module/navbar/navbar';
@Component({
  selector: 'app-profile',
  imports: [Header, Navbar],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
