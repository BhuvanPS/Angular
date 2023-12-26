import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,Router} from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { EventhandlingComponent } from './eventhandling/eventhandling.component';
import { GreetingComponent } from "./greeting/greeting.component";
import { RobotComponent } from './robot/robot.component';
//import { Router } from 'express';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProfileComponent, EventhandlingComponent, GreetingComponent,RobotComponent]
})
export class AppComponent {
  constructor(private router : Router){}
  clickme(){
    alert("Helllllllllo")
  }
  keyupExample(event:KeyboardEvent){
    let key = event.key
    alert(key)
  }
  title = 'LEARNING';
  content = "hi ppl";
  
  python(){
    this.content = "pythonn"
  }
  angular(){
        this.content = "angular"

  }
  flutter(){
        this.content = "flutter"

  }
  input = "King";
  receiveMessage(event: any){
    let message = event
    alert(message);
  }
  inputPrice = 100;
  inputBrand = "BMW";
  onPurchase(event1:any){
    let message = event1.price;
    let m = event1.brand;
    alert(`Price : ${message},Brand : ${m}`);
  }

  onClick(robot:RobotComponent){
    robot.name = "New Robo";
  }
  button1(){
    this.router.navigate(['greetings']);
  }
  button2(){this.router.navigate(['greetings/today']);}
  button3(){this.router.navigate(['greetings/today/1']);}
}
