import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "35cdda3651430d0dd4f856bd7df11a21"
  

  constructor(private http: HttpClient) { }

  getMovies(option: string) {
    return this.http.get(`${this.baseUrl}/movie/${option}?api_key=${this.apiKey}`)
  }

  getSimilarMovies(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
  }

  getMovie(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

 

}
