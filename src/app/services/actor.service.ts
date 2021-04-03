import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActorResponse } from '../interfaces/actor-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActorService {

  private baseURL: string = 'https://api.themoviedb.org/3';

  constructor( private http: HttpClient ) { }

  get params () {
    return {
      api_key: '924b1a3e3b773a17fe5a720ebe16c0a2',
      language: 'es-ES'
    }
  }

  getActorDetalle ( id: string ) {

    return this.http.get<ActorResponse>(`${ this.baseURL }//person/${ id }`, {
      params: this.params
    }).pipe()

  }

}
