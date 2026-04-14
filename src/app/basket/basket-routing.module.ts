import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponentComponent } from './basketComponent/basket-component.component';

const routes: Routes = [
  {
    'path': '',component:BasketComponentComponent
  },
  {

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
