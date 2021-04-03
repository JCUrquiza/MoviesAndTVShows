import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesResponse } from 'src/app/interfaces/series-response';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-serie-component',
  templateUrl: './serie-component.component.html',
  styleUrls: ['./serie-component.component.css']
})
export class SerieComponentComponent implements OnInit {

  public serie;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    this.seriesService.getSerieDetails(id).subscribe( result => {
      console.log(result);
      this.serie = result;
    })

  }

}
