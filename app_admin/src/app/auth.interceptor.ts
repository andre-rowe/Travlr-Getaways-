import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpHandler,
    HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';   // <-- note ./services

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.auth.token;
        if (!token) { return next.handle(req); }

        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(authReq);
    }
}
