import { User } from '../account/user';
import { Component, OnInit} from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent {
    user: User;

    constructor(
        private router: Router,
        private accountService: AccountService) {
        this.user = new User();
    }

    submit() {
        const result = this.accountService.signup(this.user);
        result.subscribe((user: User) => {
            console.log('Signup is successfull');
            this.router.navigate(['users']);
        });
    }
}
