import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {

  similarMovies: any[] = []
  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id)
      this.getSimilar(params.id)
    })
      
  }

  getSimilar(id: number) {
    this.movieService.getSimilarMovies(id).subscribe(({results}: any) => {
      this.similarMovies = results
      console.log('similar', results)
    })
  }

}
