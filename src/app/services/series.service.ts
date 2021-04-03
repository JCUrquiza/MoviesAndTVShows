import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, SeriesResponse } from '../interfaces/series-response';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SeriesService {

  private baseURL: string = 'https://api.themoviedb.org/3';
  private carteleraSeriesPage = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient ) { }

  get params () {
    return {
      api_key: '924b1a3e3b773a17fe5a720ebe16c0a2',
      language: 'es-ES',
      page: this.carteleraSeriesPage.toString()
    }
  }

  getListadoSeries (): Observable<Result[]> {

    if ( this.cargando ) {
      // Cargando peliculas
      return of([]);
    }

    this.cargando = true;
    return this.http.get<SeriesResponse>(`${this.baseURL}/tv/popular`,{
      params: this.params
    }).pipe(
      map( (resp) => resp.results),
      tap(() => {
        this.carteleraSeriesPage += 1;
        this.cargando = false;
      })
    );

  }


  restCarteleraPage() {
    this.carteleraSeriesPage = 1;
  }


  getSerieDetails(id: string) {
    return this.http.get(`${this.baseURL}/tv/${id}`, {
      params: this.params
    })
  }

  getSerieTexto( texto: string ): Observable<Result[]> {

    const params = { ...this.params, page: '1', query: texto }

    return this.http.get<SeriesResponse>(`${this.baseURL}/search/tv`, {
      params
    }).pipe(
      map( resp => resp.results )
    );

  }


}
