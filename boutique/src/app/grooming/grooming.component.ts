import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from '../services/sign.service';
import { Pet } from './pet';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  styleUrls: ['./grooming.component.css']
})
export class GroomingComponent implements OnInit {
  pet: Pet;
  docName: string;
  customerEmail: string;
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

  // Gets base uri to access other APIs


  // Uploads doc and obtain document's ID
  uploadFile() {
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

  // Gets library document id
  async getLibraryDocId(): Promise<string> {
    let docId = '';
    try {
        const data = await this.signService.getLibraryDocuments().toPromise();
        const doc = data.libraryDocumentList.find(x => x.name === this.docName);
        if (doc) {
          console.log('getLibraryDocId: ' + doc.id);
          docId = doc.id;
        }
    } catch (error) {
      console.log(error);
    }
    return docId;
  }

  // Get agreement id for doc id
  async getAgreementId(): Promise<string> {
    let agreementId = '';
    try {
      const docId = await this.getLibraryDocId();
      const data = await this.signService.getAgreementId(this.pet, docId).toPromise();
      agreementId = data.id;
      console.log('agreementId: ' + agreementId);
    } catch (error) {
      console.log(error);
    }
    return agreementId;
  }

  // Get details of library doc
  async getLibraryDocumentDetails(): Promise<string> {
  let documentDetails = '';
  try {
    const docId = await this.getLibraryDocId();
    const data = await this.signService.getLibraryDocumentDetails(docId).toPromise();
    documentDetails = JSON.stringify(data);
    console.log('Library Document Details: ' + documentDetails);
  } catch (error) {
    console.log(error);
  }
  return documentDetails;
  }

  // getAgreement() {
  //   // Get the list of library documents
  //   this.signService.getLibraryDocuments()
  //     .subscribe(data => {
  //       let docId: string;

  //       // Find a document for a document name
  //       const doc = data.libraryDocumentList.find(x => x.name === this.docName);
  //       if (doc) {
  //         docId = doc.id;

  //         // Get agreement id for doc id
  //         this.signService.getAgreementId(this.pet, docId)
  //         .subscribe(data => {
  //           const agreementId = data.id;
  //           console.log('agreementId: ' + agreementId);
  //           // console.log('Customer Email: ' + this.customerEmail);
  //           // console.log('Library ID: ' + docId);
  //         }),
  //         error => {
  //           console.log(error);
  //         }

  //         // Get details of library doc
  //         this.signService.getLibraryDocumentDetails(docId)
  //           .subscribe(data => {
  //             console.log('Library Document Details: ' + JSON.stringify(data));
  //           }),
  //           error => {
  //             console.log(error);
  //           }

  //         // // Get audit trail
  //         // this.signService.getLibraryAuditTrail(docId)
  //         //   .subscribe(data => {
  //         //     console.log('Library Document Audit Trail: ' + JSON.stringify(data));
  //         //   }),
  //         //   error => {
  //         //     console.log(error);
  //         //   }

  //         // Get combined document
  //         // this.signService.getCombinedDoc(docId)
  //         //   .subscribe(data => {
  //         //     const fileReader = new FileReader();
  //         //     // read file content on file loaded event
  //         //     fileReader.onload = () => {
  //         //         let base64 = fileReader.result;
  //         //         console.log("Combined Document: " + base64);
  //         //     }
  //         //     // convert data to base64
  //         //     fileReader.readAsDataURL(data);
  //         //   }),
  //         //   error => {
  //         //     console.log(error);
  //         //   }

  //         // Get url of all visible pages of all docs
  //         this.signService.getUrlVisiblePages(docId)
  //           .subscribe(data => {
  //             console.log('URL of Visible Pages: ' + JSON.stringify(data));
  //           })

  //         // Get IDs of documents
  //         this.signService.getLibraryIDs(docId)
  //           .subscribe(data => {
  //             console.log('Library IDs: ' + JSON.stringify(data));
  //           }),
  //           error => {
  //             console.log(error);
  //           }

  //           // Get file stream of a doc

  //           // Get image urls of all visible pages of a doc

  //           // Get data entered into the interactive form fields

  //           // Get members info
  //           this.signService.getMembersInfo(docId)
  //           .subscribe(data => {
  //             console.log('Members Info: ' + JSON.stringify(data));
  //           }),
  //           error => {
  //             console.log(error);
  //           }

  //           // Get events info
  //           this.signService.getEventsInfo(docId)
  //           .subscribe(data => {
  //             console.log('Events Info: ' + JSON.stringify(data));
  //           }),
  //           error => {
  //             console.log(error);
  //           }

  //           // Get latest note of library doc for the API user
  //           this.signService.getLatestNote(docId)
  //             .subscribe(data => {
  //               console.log('Latest Note: ' + JSON.stringify(data));
  //             }),
  //             error => {
  //               console.log(error);
  //             }
  //       }
  //       // Error if document name is not correct
  //       else {
  //         console.log("Error: Document is not found.");
  //       }
  //     }),
  //     error => {
  //       console.log(error);
  //     }
  // }
}
