import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../account/user';

// Angular service for managing user accounts
@Injectable()
export class AccountService {
    baseUrl = 'http://localhost:5000/api/account';
    signupUrl = this.baseUrl + '/signup';
    signinUrl = this.baseUrl + '/signin';
    signoutUrl = this.baseUrl + '/signout';
    removeUrl = this.baseUrl + '/remove';

    signedInUser: User; 
    loggedIn: boolean = false;

    constructor(private http: HttpClient) {
    }

    // Gets all users.
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl);
    }

    // Gets a user by user name.
    // Returns the user info or NotFound if username is not found.
    getUser(username: string): Observable<User> {
        const url = `${this.baseUrl}/${username}`;
        return this.http.get<User>(url);
    }

    // Signs up a user
    signup(user: User): Observable<User> {
        return this.http.post<User>(this.signupUrl, user);
    }

    // Signs in a user
    signin(user: User): Observable<User> {
        return this.http.post<User>(this.signinUrl, user);
    }

    // Saves user in this function
    saveSignedInUser(user: User) {
        this.signedInUser = user;
    }

    // Signs out a user
    signout(user: User): Observable<User> {
        return this.http.post<User>(this.signoutUrl, user);
    }

    // Updates a user
    updateUser(user: User): Observable<User> {
        const url = `${this.baseUrl}/${user.userName}`;
        return this.http.put<User>(url, user);
    }

    // Removes a user
    remove(user: User): Observable<User> {
        const url = `${this.removeUrl}/${user.userName}`;
        return this.http.delete<User>(url);
    }

    getSignedInUser() {
        return this.signedInUser; 
    }

    getIsLoggedIn() {
        return this.loggedIn;
    }
}
