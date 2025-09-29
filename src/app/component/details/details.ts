import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../services/movie.service';

@Component({
  selector: 'app-details',
  imports: [Header, CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit{
  movieId: number | null = null;
  movieDetails: any = null;

  constructor( private route: ActivatedRoute, private movieService: Movie) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.movieId = +id;
        this.getMovieDetails(this.movieId);
      }
    });
  }

   getMovieDetails(id: number): void {
    this.movieService.getMovieDetails(id).subscribe(
      (details) => {
        this.movieDetails = details;
        console.log('Detalhes do filme:', this.movieDetails);
      },
      (error) => {
        console.error('Erro ao buscar detalhes do filme', error);
      }
    );
  }
}
