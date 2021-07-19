import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'yellow';
  @Input() highlightColor = 'green';
  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseHover(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');*/
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseAntiHover(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');*/
    this.bgColor = this.defaultColor;
  }

}
