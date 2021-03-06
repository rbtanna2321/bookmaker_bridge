import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable , of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

export interface UserDetails {
    _id: string;
    first_name: string;
    last_name: string;
    user_name: string;
    password: string;
    exp: number;
    iat: number;
}

interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    _id: string;
    first_name: string;
    last_name: string;
    user_name: string;
    password: string;
}
@Injectable()
export class AuthenticationService {
    baseUrl = 'http://localhost:3000';

    private token: string;

    constructor(private http: HttpClient , private router: Router) {}

    private saveToken(token: string): void {
        localStorage.setItem('userToken', token);
        this.token = token;
    }

    private getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem('userToken');
        }
        return this.token;
    }
    public getUserDetails(): UserDetails {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        } else {
            return null;
        }
    }
    public isLoggedIn(): boolean {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }
    public register(user: TokenPayload): Observable<any> {
        const base = this.http.post(this.baseUrl + '/users/register', user);
        console.log(base);

        const request = base.pipe(
            map((data: TokenResponse) => {
                if (data.token) {
                    this.saveToken(data.token);
                }
                return data;
            })
        );
        return request;
    }
    public login(user: TokenPayload): Observable<any> {
        const base = this.http.post(this.baseUrl + '/users/login', user);
        const request = base.pipe(
            map((data: TokenResponse) => {
                if (data.token) {
                    console.log(data.token);
                    this.saveToken(data.token);
                }
                return data;
                this.router.navigateByUrl('/dashboard');
            })
        );
        return request;
    }

    public profile(): Observable<any> {
        return this.http.get(this.baseUrl + '/users/profile', {
            headers: { Authorization: '${this.getToken()}'}
        });
    }

    public logout(): void {
        this.token = '';
        window.localStorage.removeItem('userToken');
        this.router.navigateByUrl('/');
    }
}