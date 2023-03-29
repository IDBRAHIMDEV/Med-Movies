import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  popularMovies: any[] = []
  searchValue: string = ""

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
      this.getPopular()
  }


  getPopular(page: number = 1) {
    this.movieService.getMovies("popular", page).subscribe((data: any) => {
      console.log(data)
      this.popularMovies = data.results
      // console.log('popular', results)
    })
  }

  paginate(event: any) {
    this.getPopular(event.page + 1)
  }

  search() {
    
    if(this.searchValue) {

      this.movieService.searchMovies(this.searchValue).subscribe(({results}: any) => {
        this.popularMovies = results
      })
      return
    }

    this.getPopular()



   
  }

}
