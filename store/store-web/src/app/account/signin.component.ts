import { User } from '../account/user';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent {
    user: User;

    constructor(
        private accountService: AccountService) {
        this.user = new User();
    }

    submit() {
        const result = this.accountService.signin(this.user);
        result.subscribe((user: User) => {
            console.log('Signin is successfull');
        });
    }
}
