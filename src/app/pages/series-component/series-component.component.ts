import { Component, HostListener, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/series-response';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-component',
  templateUrl: './series-component.component.html',
  styleUrls: ['./series-component.component.css']
})
export class SeriesComponentComponent implements OnInit {

  public series: Result[] = [];

  @HostListener('window: scroll', ['$event'])
  onScroll() {
  
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight) ;
    
    if ( pos > max ) {

      if (this.seriesService.cargando) {return;}
      this.seriesService.getListadoSeries().subscribe( series => {
        this.series.push(...series);
        console.log(this.series);
      });
      
    }

  }

  constructor( private seriesService: SeriesService ) { }

  ngOnInit(): void {

    this.seriesService.getListadoSeries()
      .subscribe( series => {
        console.log(series);
        this.series = series;
        // this.moviesSlideShow = movies;
      })

  }

  ngOnDestroy() {
    this.seriesService.restCarteleraPage();
  }

}
