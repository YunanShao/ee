import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent{

  constructor() { }

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  
  onClick():void{
    this.notify.emit('This is the message from child');
  }
}
