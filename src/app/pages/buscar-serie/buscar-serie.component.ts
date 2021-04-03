import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result, SeriesResponse } from 'src/app/interfaces/series-response';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-buscar-serie',
  templateUrl: './buscar-serie.component.html',
  styleUrls: ['./buscar-serie.component.css']
})
export class BuscarSerieComponent implements OnInit {

  public series: Result[] = [];
  // serie;

  public texto: string = '';

  constructor( 
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      
      this.texto = params.texto;

      this.seriesService.getSerieTexto( params.texto ).subscribe(
        series => {
          console.log(series);
          this.series = series;
          console.log(this.series);
        }
      );

    });

  }

}
