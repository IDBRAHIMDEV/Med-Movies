import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: any[] = []
  ngOnInit(): void {
      this.route.parent?.params.subscribe(({id}: any) => {
        this.getVideosByMovie(id)
      })
  }

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  getVideosByMovie(id: number) {
    this.movieService.getVideosMovie(id).subscribe(({results}: any) => {
      this.videos = results
    })
  }
}
