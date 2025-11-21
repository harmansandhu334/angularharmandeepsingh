import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocus {




  @Input() appHighlightOnFocus: string = '';


  constructor(private el: ElementRef) { }
  @HostListener('focus') onFocus() {
    this.applyFocusHighlight(this.appHighlightOnFocus || 'blue'); // Default colour just incase
  }

  @HostListener('blur') onBlur() {
    this.applyFocusHighlight('');
  }

  private applyFocusHighlight(color: string) {
    this.el.nativeElement.style.color = color;
  }}
