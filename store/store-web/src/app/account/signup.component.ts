import { User } from '../account/user';
import { Component, OnInit} from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent {
    user: User;

    constructor(
        private accountService: AccountService) {
        this.user = new User();
    }

    submit() {
        const result = this.accountService.signup(this.user);
        result.subscribe((user: User) => {
            console.log('Signup is successfull');
        });
    }
}
