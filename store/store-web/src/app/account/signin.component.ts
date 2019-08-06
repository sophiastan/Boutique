import { User } from '../account/user';
import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit{
    user: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService) {
        this.user = new User();
    }

    ngOnInit() {
        
    }

    submit() {
        const result = this.accountService.signin(this.user);
        result.subscribe(
            (user: User) => {
                this.accountService.saveSignedInUser(user);
                console.log('Signin is successfull');
                this.router.navigate(['']);
            },
            error => {
                alert('Username or Password does not exist.');
            }
        );
    }
}
