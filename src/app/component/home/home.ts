import { Component, OnInit } from '@angular/core';
import { Header } from "../header/header";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterLink } from '@angular/router';
import { Movie } from '../../services/movie.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  imports: [Header, CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  popularMovies : any[] = [];
  searchQuery: string = '';
  searched: boolean = false;
  constructor(private movieService: Movie) {}

ngOnInit(): void {
  this.movieService.getPupularMovies().subscribe({
    next: (data: any) => {
      this.popularMovies = data.results;
      console.log(this.popularMovies);
    }}
  )
}
clearSearch(): void {
    this.searchQuery = '';
  }

}
