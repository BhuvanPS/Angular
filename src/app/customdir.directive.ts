import { Directive, ElementRef,HostListener,Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdir]',
  standalone: true
})
export class CustomdirDirective {
  @Input() color!: string ;
  @Input() appCustomdir!: string;
  private htmlElement :HTMLElement;
  renderer: any;
  elementRef!: ElementRef ;
   @Input() set colour(value: string) {
    // Set the style based on the provided colour value
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', value);
  }
  constructor(element :ElementRef) { 
      this.htmlElement = element.nativeElement;
      this.htmlElement.style.color = "red"
      //this.htmlElement.addEventListener();
  }
  @HostListener("click") onClick(){
    this.htmlElement.style.color = this.appCustomdir
  }

}
