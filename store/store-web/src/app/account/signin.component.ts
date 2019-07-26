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
    @Input() displayUsername: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService) {
        this.user = new User();
    }

    ngOnInit() {
        // this.getUser(this.userName);
    }

    submit() {
        const result = this.accountService.signin(this.user);
        result.subscribe(
            (user: User) => {
                console.log('Signin is successfull');
                this.displayUsername = user.userName;
                console.log(this.displayUsername);
                this.router.navigate(['',
                // {
                //     userName: user.userName
                // }
            ]);
            },
            error => {
                alert('Username or Password does not exist.');
            }
        );
    }
}
