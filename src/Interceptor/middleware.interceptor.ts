import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { SpinnerService } from "../Services/spinner.service";
import { delay, finalize, Observable } from "rxjs";
import { Injectable, INJECTOR } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class MiddlewareInterceptor implements HttpInterceptor {
  constructor(private spinner:SpinnerService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
   this.spinner.Loader();
   return next.handle(req).pipe(
    delay(100),
    finalize(()=>{
      this.spinner.Hide();
    })
   )
  }
}


