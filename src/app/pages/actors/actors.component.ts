import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  baseImageUrl = "https://image.tmdb.org/t/p/w300"
  actors: any[] = []

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.parent?.params.subscribe((params: any) => {
        this.getActors(params.id)
      })
  }

  getActors(id: number) {
    this.movieService.getCreditsMovie(id).subscribe(({cast}: any) => {
      this.actors = cast
    })
  }

  resolveImage(avatar: string) {
    if(avatar) {
      return `${this.baseImageUrl}${avatar}`
    }
    return '../../../assets/man.jpg'
  }
}
