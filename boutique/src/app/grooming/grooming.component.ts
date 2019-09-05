import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ['./grooming.component.css']
})
export class GroomingComponent implements OnInit {
  fileToUpload: File = null;

  constructor(
    private router: Router,
    private signService: SignService) {
    
    }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToForm() {
    this.signService.uploadFile(this.fileToUpload)
      .subscribe(data => {
        console.log('Uploaded file successfully')
      },
        error => {
          console.log(error);
        }
      );
  }
 
  submit() {
    console.log('Pet details completed');
    this.router.navigate(['']);
  }
}
