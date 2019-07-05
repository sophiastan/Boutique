import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../account/user';

// Angular service for managing user accounts
@Injectable()
export class AccountService {
    baseUrl = 'http://localhost:5000';
    signupUrl = this.baseUrl + '/api/account/signup';
    signinUrl = this.baseUrl + '/api/account/signin';
    signoutUrl = this.baseUrl + '/api/account/signout';
    removeUrl = this.baseUrl + '/api/account/remove';

    constructor(private http: HttpClient) {
    }

    // Sign up a user
    signup(user: User): Observable<User> {
        return this.http.post<User>(this.signupUrl, user);
    }

    // Sign in a user
    signin(user: User): Observable<User> {
        return this.http.post<User>(this.signinUrl, user);
    }

    // Sign out a user
    signout(user: User): Observable<User> {
        return this.http.post<User>(this.signoutUrl, user);
    }

    // Remove a user
    remove(user: User): Observable<User> {
        const url = `${this.removeUrl}/${user.username}`;
        return this.http.delete<User>(url);
    }
}
