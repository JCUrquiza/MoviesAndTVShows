import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../../services/actor.service';
import { ActorResponse } from '../../interfaces/actor-response'

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})

export class ActorComponent implements OnInit {

  public actor: ActorResponse;

  constructor( 
    private activateRouter: ActivatedRoute,
    private actorService: ActorService
  ) {}

  ngOnInit(): void {

    const { id } = this.activateRouter.snapshot.params;

    console.log(id);

    this.actorService.getActorDetalle(id).subscribe(actor => {
      console.log(actor);
      this.actor = actor;
    })


  }

}
