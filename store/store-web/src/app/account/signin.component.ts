import { User } from '../account/user';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent {
    user: User;

    constructor(
        private router: Router,
        private accountService: AccountService) {
        this.user = new User();
    }

    submit() {
        const result = this.accountService.signin(this.user);
        result.subscribe((user: User) => {
            console.log('Signin is successfull');
            this.router.navigate(['store']);
        });
    }
}
