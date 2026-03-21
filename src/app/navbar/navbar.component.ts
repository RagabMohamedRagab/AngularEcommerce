import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 visiable:boolean=false;
  ToggleDrop(){
  this.visiable=!this.visiable;
  }
}
