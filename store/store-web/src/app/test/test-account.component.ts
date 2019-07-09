import { User } from '../account/user';
import { Component, OnInit} from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-test-account',
    templateUrl: './test-account.component.html'
})

export class TestAccountComponent implements OnInit {
    user: User;
    users: User[];

    constructor(
        private accountService: AccountService) {
        this.user = new User();
    }

    ngOnInit(): void {
        this.accountService.getUsers().subscribe((users: User[]) => this.users = users);
    }

}
