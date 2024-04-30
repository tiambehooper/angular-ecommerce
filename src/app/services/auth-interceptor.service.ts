import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { Observable, from, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return  from(this.handleAccess(request, next));

  }

 private async handleAccess(requst: HttpRequest<any>, next: HttpHandler):Promise<HttpEvent<any>> {
   const securedEndpoints = ['http://localhost:8080/api/orders'];

   if(securedEndpoints.some(url => requst.urlWithParams.includes(url))){

    //get access token
    const accessToken = this.oktaAuth.getAccessToken();

    //clone the request and add new header with access
    requst = requst.clone({
      setHeaders: {
        Authorization: 'Bearer ' + accessToken
      }
    });

   }
   return await lastValueFrom(next.handle(requst));
  }
}
