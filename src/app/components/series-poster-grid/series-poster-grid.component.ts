import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/series-response';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-poster-grid',
  templateUrl: './series-poster-grid.component.html',
  styleUrls: ['./series-poster-grid.component.css']
})
export class SeriesPosterGridComponent implements OnInit {

  @Input() series: Result[];

  constructor( 
    private seriesService: SeriesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log(this.series);
    
  }

  onSerieClick (id) {

    this.router.navigate(['serie', id]);

  }

}
