
import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() name : any
  @Output() dataEvent = new EventEmitter<string>()

  addUser(value:any){
    this.dataEvent.emit(value)
  }

}
