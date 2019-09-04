import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../account/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  isExpanded = false;
  signedInUser: User; 
  loggedIn: boolean;

  public constructor(private accountService: AccountService) {
  }

  // getSignedInUser() {
  //   const user = this.accountService.getSignedInUser();
  //   console.log('From getSignedInuser(). User = ' + user.userName);
  //   return user;
  // }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
