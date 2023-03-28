import { ImagesComponent } from './pages/images/images.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { SimilarComponent } from './pages/similar/similar.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movies",
    component: MoviesComponent,
  },
  {
    path: 'movie/:id',
    component: ShowMovieComponent,
    children: [
      {
        path: 'similar',
        component:SimilarComponent
      },
      {
        path: 'actors',
        component: ActorsComponent
      },
      {
        path: 'images',
        component: ImagesComponent
      },
      {
        path: 'videos',
        component: VideosComponent
      }
    ]
  },
  {
    path: "tv",
    component: TvComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
