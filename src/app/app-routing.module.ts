import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { ActorComponent } from './pages/actor/actor.component';
import { SeriesComponentComponent } from './pages/series-component/series-component.component';
import { SerieComponentComponent } from './pages/serie-component/serie-component.component';
import { BuscarSerieComponent } from './pages/buscar-serie/buscar-serie.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'pelicula/:id', component: PeliculaComponent
  },
  {
    path: 'buscarPelicula/:texto', component: BuscarComponent
  },
  {
    path: 'actor/:id', component: ActorComponent
  },
  {
    path: 'series', component: SeriesComponentComponent
  },
  {
    path: 'serie/:id', component: SerieComponentComponent
  },
  {
    path: 'buscarSerie/:texto', component: BuscarSerieComponent
  },
  {
    path: '**', redirectTo: '/home'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
