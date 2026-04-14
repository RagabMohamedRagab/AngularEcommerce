import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http'; // ← import ده

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ShopModule } from './shop/shop.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MiddlewareInterceptor } from '../Interceptor/middleware.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BasketComponentComponent } from './basket/basketComponent/basket-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShopModule ,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      closeButton: true,
      progressBar: true
    }),
    NgxSpinnerModule,BrowserAnimationsModule
    ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    {provide:HTTP_INTERCEPTORS, useClass:MiddlewareInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
