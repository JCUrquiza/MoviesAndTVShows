import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieResponse } from '../../interfaces/movie-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;
  public cast: Cast[] = [];

  public generos = [];
  public idiomas = [];

  constructor( 
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location,
    private router: Router ) {}

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    // Combina dos promesas y regresa una:
    combineLatest([
      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCast(id)
    ]).subscribe( ([ pelicula, cast ]) => {
      console.log(pelicula);
      console.log(cast);

      if ( !pelicula ) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = pelicula;

      this.generos = pelicula.genres;
      this.idiomas = pelicula.spoken_languages;
      console.log(this.idiomas);
      
      this.cast = cast.filter( actor => actor.profile_path != null );

    });

    /*
    .subscribe(
      movie => {
        console.log(movie);
        if ( !movie ) {
          this.router.navigateByUrl('/home');
          return;
        }
        this.pelicula = movie;
      }
    );

    .subscribe(
      cast => {
        console.log(cast);
        this.cast = cast.filter( actor => actor.profile_path != null );
      }
    );
    */
    
  }

  regresar() {
    this.location.back();
  }

}
