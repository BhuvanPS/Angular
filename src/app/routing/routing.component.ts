import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {
name!: string;
  constructor(private route:ActivatedRoute){

    this.route.params.subscribe(
      paramsObject=>{
       this.name= paramsObject['name'];
      }
    )
  }
}
