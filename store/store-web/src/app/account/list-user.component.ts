import { User } from '../account/user';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html'
})

export class ListUserComponent implements OnInit {
    user: User;
    users = [];
  
    constructor(private accountService: AccountService) {
    }
  
    ngOnInit(): void {
        this.accountService.getUsers().subscribe((users: User[]) => this.users = users);
    }

}