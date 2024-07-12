import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutoClick]',
  standalone: true
})
export class AutoClickDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Ensure the element is an anchor tag
    if (this.el.nativeElement.tagName.toLowerCase() === 'a') {
      // Click the anchor tag
      this.renderer.listen(this.el.nativeElement, 'click', () => {
        // Click event logic (if any)
      });
      this.el.nativeElement.click();
    }
  }
}