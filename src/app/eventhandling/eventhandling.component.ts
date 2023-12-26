import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventhandling',
  standalone: true,
  imports: [],
  templateUrl: './eventhandling.component.html',
  styleUrl: './eventhandling.component.css'
})
export class EventhandlingComponent {
  inputs : string = "";
  keydownEvent(event:KeyboardEvent){
    let key = event.key;
    this.inputs +=key
  }
  clickEvent(){
    alert("clicked")
  }
  count=0;
  keyupEvent(event:KeyboardEvent){
    let key = event.key;
    this.count++
    if(this.count>=5){
      alert(key)
    }
  }
}
