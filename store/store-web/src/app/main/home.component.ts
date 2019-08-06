import { Component, OnInit, Input} from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService) {
  }

  ngOnInit(): void {
    
  }

  getName() {
    const user = this.accountService.getSignedInUser();
    if (user) {
      return user.firstName + ' ' + user.lastName;
    }
    else return '';
  }

}
