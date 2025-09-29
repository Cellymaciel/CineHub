import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Movie {
 
    private apiURL = 'https://api.themoviedb.org/3'
    private apiKey ='1caefe73a57be12493e326e7fabb42b8'

    constructor(private http: HttpClient) {}

    getPupularMovies(){
      return this.http.get(`${this.apiURL}/movie/popular?api_key=${this.apiKey}&language=pt-BR`)
    }

    getMovieDetails(id: number){
      return this.http.get(`${this.apiURL}/movie/${id}?api_key=${this.apiKey}&language=pt-BR`)
    }
  }
