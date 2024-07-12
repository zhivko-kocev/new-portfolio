import { Directive, HostListener, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClickStyle]',
  standalone:true
})
export class ClickStyleDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) {   
  }

  @Input() appClickStyle : any

  @HostListener('click')
  onClick() {

    this.renderer.addClass(this.el.nativeElement, 'clicked');
    this.appClickStyle.forEach((element : HTMLAnchorElement) => {
      if(element != this.el.nativeElement){
        this.renderer.addClass(element,'nav-text')
        this.renderer.removeClass(element,'clicked')
      }
    });
  }
}