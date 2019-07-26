import { User } from '../account/user';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html'
})

export class ListUserComponent implements OnInit {
    user: User;
    users = [];
  
    constructor(
        private accountService: AccountService,
        private router: Router) {
    }
  
    ngOnInit(): void {
        this.accountService.getUsers().subscribe((users: User[]) => this.users = users);
    }

    delete() {
        if (confirm('Delete this user?')) {
          this.accountService.remove(this.user)
            .subscribe(r => {
              this.router.navigate(['users']);
            });
        }
      }

}