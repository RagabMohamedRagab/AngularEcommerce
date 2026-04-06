import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    BrowserAnimationsModule
],
  exports: [NavbarComponent]
})
export class CoreModule { }
