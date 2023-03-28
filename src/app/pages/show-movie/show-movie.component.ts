import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  movie: any = {}
 

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params: any) => {
      this.getOneMovie(params.id)
    })

  }

  getOneMovie(id: number) {
    this.movieService.getMovie(id).subscribe((response: any) => {
      this.movie = response
      console.log(this.movie)
    })
  }

}
