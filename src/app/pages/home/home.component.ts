import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  upComingMovies: any[] = [] 
  popularMovies: any[] = [] 

  ngOnInit(): void {
      this.getAllUpComing()
      this.getPopular()
  }

  constructor(private movieService: MovieService) {}

  getAllUpComing() {
    this.movieService.getMovies("upcoming").subscribe(({ results }: any) => {
      
      this.upComingMovies = results
      console.log(results)
    })
  }


  getPopular() {
    this.movieService.getMovies("popular").subscribe(({ results }: any) => {
      
      this.popularMovies = results
      console.log('popular', results)
    })
  }
}
