import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let resultRequest = request;

    if (this.tokenStorageService.hasToken()) {
      const token = this.tokenStorageService.getToken();

      const newHeaders = request.headers.append(
        'Authorization', 'Basic ' + token
      );

      resultRequest = request.clone({
        headers: newHeaders
      });
    }

    return next.handle(resultRequest);
  }
}

