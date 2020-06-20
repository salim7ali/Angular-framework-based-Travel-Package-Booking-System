import { Directive, HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[dragableColumn]'
})
export class DragableColumnDirective {

  start: any;
  pressed: boolean;
  startX: any;
  startWidth: any;

  constructor(private renderer: Renderer2) { }

  @HostListener('mousedown', ['$event']) DragEvent(event) {
    this.start = event.target;
    this.pressed = true;
    this.startX = event.clientX;
    this.startWidth = $(this.start).parent().width();
    this.initResizableColumns();
  }

  initResizableColumns() {
    this.renderer.listen('body', 'mousemove', (event) => {
      if (this.pressed) {
        const width = this.startWidth + (event.x - this.startX);
        $(this.start).parent().css({ 'min-width': width, 'max-width': width });
        const index = $(this.start).parent().index() + 1;
        $('.glowTableBody tr td:nth-child(' + index + ')').css({ 'min-width': width, 'max-width': width });
      }
    });
    this.renderer.listen('body', 'mouseup', (event) => {
      if (this.pressed) {
        this.pressed = false;
      }
    });
 }
}
