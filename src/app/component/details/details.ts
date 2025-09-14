import { Component } from '@angular/core';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [Header, CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {

}
