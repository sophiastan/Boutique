import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../grooming/pet';

// Angular service for managing products
@Injectable()
export class SignService {
    baseUrl = 'https://api.na2.echosign.com';
    uploadUrl = this.baseUrl + '/api/rest/v6/transientDocuments';
    sendUrl = this.baseUrl + '/api/rest/v6/agreements';
    libraryUrl = this.baseUrl + '/api/rest/v6/libraryDocuments'
    integrationKey = 'Bearer 3AAABLblqZhCUzZTQu2MvFsn9FbiEexxLzYfCVOK9b9U2HvIBW_9OlYJ-FxZDgnMsih6024_N50ZgKujZC3kt5ccinyfceyVE';

    constructor(private http: HttpClient) {
    }

    uploadFile(file: File): Observable<any> {
        const selectedFile = (<HTMLInputElement>document.getElementById("inputFile")).files;
        const fileToLoad = selectedFile[0];
        console.log(fileToLoad);

        // Encodes file input content
        const formData = new FormData();
        formData.append('File-Name', fileToLoad.name);
        formData.append('File', fileToLoad);
        formData.append('Mime-Type', fileToLoad.type);
        console.log(formData);
        // Access Token obtained from authorization code (code in the request, client id, client secret) 
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': this.integrationKey
            })
        };

        console.log(httpOptions.headers);
        return this.http.post(this.uploadUrl, formData, httpOptions);
    }

    // sendAgreement(documentId: string): Observable<any> {
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Authorization': this.integrationKey
    //         })
    //     };

    //     // Information about agreement
    //     const agreementInfo = {
    //         'fileInfos': [{
    //             //"libraryDocumentId": // user library doc id
    //             'transientDocumentId': documentId
    //         }],
    //         'name': 'AgreementForm',
    //         'participantSetsInfo': [{
    //             'memberInfos': [{
    //                 'email': 'signer@waggyfriendboutique.com'
    //             }],
    //             'order': 1,
    //             'role': 'SIGNER'
    //         }],
    //         'signatureType': 'ESIGN',
    //         'state': 'IN_PROCESS'
    //     };

    //     return this.http.post(this.sendUrl, agreementInfo, httpOptions);
    // }

    getLibraryDocumentID(): Observable<any> {
        return this.http.get(this.libraryUrl);
    }

    postAgreement(pet: Pet): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': this.integrationKey
            })
        };

        // Information about agreement
        const agreementInfo = {
            'fileInfos': [{
                'libraryDocumentId': 'CBJCHBCAABAAMB9vP1TTb9xCVRIRNDfzy55sa5VUQ4JQ' 
            }],
            'name': 'AgreementForm',
            'participantSetsInfo': [{
                'memberInfos': [{
                    'email': 'signer@waggyfriendboutique.com'
                }],
                'order': 1,
                'role': 'SIGNER'
            }],
            "mergeFieldInfo": [
                {
                  "fieldName": "petName",
                  "defaultValue": pet.petName,
                }
            ],
            'signatureType': 'ESIGN',
            'state': 'IN_PROCESS'
        };

        console.log(agreementInfo);

        return this.http.post(this.sendUrl, agreementInfo, httpOptions);
    }
}
