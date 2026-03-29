import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagantaion',
  templateUrl: './pagantaion.component.html',
  styleUrl: './pagantaion.component.scss'
})
export class PagantaionComponent {
@Input() PageSize:number;
@Input() totalRecord:number;
@Output()pageChanged=new EventEmitter();

OnChangePage(event:any){
  this.pageChanged.emit(event);
}
}
