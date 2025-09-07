import { Component } from '@angular/core';
import { Header } from "../header/header";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [Header, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  searchQuery: string = '';
  searched: boolean = false;


clearSearch(): void {
    this.searchQuery = '';
  }

}
