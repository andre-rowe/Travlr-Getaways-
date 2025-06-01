import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable } from 'rxjs';

interface AuthResponse { token: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {

    private api = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.api}/login`, { email, password })
            .pipe(tap(res => localStorage.setItem('token', res.token)));
    }

    register(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.api}/register`, { email, password })
            .pipe(tap(res => localStorage.setItem('token', res.token)));
    }

    get token(): string | null {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return !!this.token;
    }

    logout(): void {
        localStorage.removeItem('token');
    }
}
