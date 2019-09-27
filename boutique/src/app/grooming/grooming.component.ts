import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from '../services/sign.service';
import { Pet } from './pet'

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ['./grooming.component.css']
})
export class GroomingComponent implements OnInit {
  pet: Pet;
  docName: string;
  fileToUpload: File = null;

  constructor(private router: Router, private signService: SignService) {
      this.pet = new Pet();
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
        console.log('transientDocumentId: ' + docId);
      },
      error => {
        // Display error from uploading document
        console.log(error);
      }
      );
  }

  getAgreement() {
    // Get the list of library documents
    this.signService.getLibraryDocuments()
      .subscribe(data => {
        let docId: string;

        // Find a document for a document name
        const doc = data.libraryDocumentList.find(x => x.name === this.docName);
        if (doc) {
          docId = doc.id;

          // Get agreement id for doc id
          this.signService.getAgreementId(this.pet, docId)
          .subscribe(data => {
            const agreementId = data.id;
            console.log('agreementId: ' + agreementId);
          }),
          error => {
            console.log(error);
          }
        }
        // Error if document name is not correct
        else {
          console.log("Error: Document is not found.");
        }
      }),
      error => {
        console.log(error);
      }
  }
}
