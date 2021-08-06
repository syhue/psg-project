import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    // route = environment.apiServer + 'auth';
    route = 'http://localhost:3000/auth/signin'

    constructor(
        private http: HttpClient
    ) { }

    signIn(username: string, password: string): Observable<string> {
        const body: any = {
            username: username,
            password: password
        }
        return this.http.post<string>(this.route, body);
    }

}
