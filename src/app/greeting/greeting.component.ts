import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
 @Input()
  name!: string;
  @Input()price!:number;
  @Input()brand!:string;

  @Output() 
    sendMessage = new EventEmitter<String>();
    @Output()  purchase = new EventEmitter<{price :number,brand:string}>();

  send(){
    let msg: string = 'Welcome ' + this.name;
    this.sendMessage.emit(msg);
  }
  Purchase(){
    
    this.purchase.emit({price:this.price,brand:this.brand});
  }
 
}
