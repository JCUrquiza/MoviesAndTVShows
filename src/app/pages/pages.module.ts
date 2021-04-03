import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';
import { ActorComponent } from './actor/actor.component';
import { SeriesComponentComponent } from './series-component/series-component.component';
import { SerieComponentComponent } from './serie-component/serie-component.component';
import { BuscarSerieComponent } from './buscar-serie/buscar-serie.component';

@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    ActorComponent,
    SeriesComponentComponent,
    SerieComponentComponent,
    BuscarSerieComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})

export class PagesModule { }
