import { Component, OnInit, Input} from '@angular/core';
import { User } from '../account/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  user: User; 
  @Input() selectdUserName: string;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    
  }

}
