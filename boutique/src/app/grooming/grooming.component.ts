import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from '../services/sign.service';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ['./grooming.component.css']
})
export class GroomingComponent implements OnInit {
  // Define default variable for selected file
  fileToUpload: File = null;

  constructor(
    private router: Router,
    private signService: SignService) {

    }

  ngOnInit() {
  }

  // Function used for change event of file input
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    // Upload document to get document Id
    this.signService.uploadFile(this.fileToUpload)
      .subscribe(data => {
        // Get document Id
        const docId = data.transientDocumentId;

        // Send document
        this.signService.sendAgreement(docId)
          .subscribe(d => {
            // Get sign generated Id
            const signId = d.id;
          },
            error => {
              // Display error from send document
              console.log(error);
            }
          );
      },
        error => {
          // Display error from uploading document
          console.log(error);
        }
      );
  }
 
  submit() {
    // submit document for signing
    this.uploadFile();
  }
}
