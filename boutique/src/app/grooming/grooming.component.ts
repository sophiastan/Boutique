import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ['./grooming.component.css']
})
export class GroomingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log('Pet details completed');
    this.router.navigate(['']);
  }

}
