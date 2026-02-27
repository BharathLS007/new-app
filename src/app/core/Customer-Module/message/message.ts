import { Component } from '@angular/core';
import { Header } from '../../Shared-Module/header/header';
import { Navbar } from '../../Shared-Module/navbar/navbar';
@Component({
  selector: 'app-message',
  imports: [Header, Navbar],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message {

}
