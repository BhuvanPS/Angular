import { Component } from '@angular/core';

@Component({
  selector: 'app-robot',
  standalone: true,
  imports: [],
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.css'
})
export class RobotComponent {
  name ="Roboga";
  print(input:HTMLInputElement){
    alert(input.value);
  }
}
