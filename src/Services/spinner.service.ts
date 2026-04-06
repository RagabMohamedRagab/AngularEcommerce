import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

 RequestCounter:number=0
  constructor(private spinner:NgxSpinnerService) { }

  Loader(){
  debugger
    this.RequestCounter++;
    this.spinner.show(undefined,{
      bdColor : "rgba(0, 0, 0, 0.8)",
      size: "medium",
      color : "#4d09ed",
      type : "square-jelly-box",
      fullScreen : true
    });
  }

  Hide(){
        this.RequestCounter--;

    if(this.RequestCounter>0){
      this.RequestCounter=0;
      this.spinner.hide();
    }
  }
}
