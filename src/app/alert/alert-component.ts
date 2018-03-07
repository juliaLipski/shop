import { Component, OnDestroy,Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'alert',
  templateUrl: './alert-component.html',
  styleUrls: ['./alert-component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class AlertComponent  {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { 
        // subscribe to alert messages
        
    }
close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}



