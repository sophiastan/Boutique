import { Component, OnInit, Input} from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  userName: string;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService) {
  }

  ngOnInit(): void {
    // this.userName = this.route.snapshot.queryParams.userName;
  }

}
