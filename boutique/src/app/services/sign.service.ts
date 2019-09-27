import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../grooming/pet';

// Angular service for managing products
@Injectable()
export class SignService {
    baseUrl = 'https://api.na2.echosign.com';
    uploadUrl = this.baseUrl + '/api/rest/v6/transientDocuments';
    agreementUrl = this.baseUrl + '/api/rest/v6/agreements';
    libraryUrl = this.baseUrl + '/api/rest/v6/libraryDocuments';
    integrationKey = 'Bearer 3AAABLblqZhAG7qkayUIOJhNzp2GW-e1PUbHr2byu0rBPCQYaCrnMN0I7zVFg_blSnOpqyTL5xanhWv22b2Vc_H9qURCS4UfB';
    httpOptions = {
        headers: new HttpHeaders({
            'Authorization': this.integrationKey
        })
    };

    constructor(private http: HttpClient) {}

    uploadFile(file: File): Observable<any> {
        const selectedFile = (<HTMLInputElement>document.getElementById("inputFile")).files;
        const fileToLoad = selectedFile[0];
        console.log(fileToLoad);

        // Encodes file input content
        const formData = new FormData();
        formData.append('File-Name', fileToLoad.name);
        formData.append('File', fileToLoad);
        formData.append('Mime-Type', fileToLoad.type);
 
        return this.http.post(this.uploadUrl, formData, this.httpOptions);
    }

    getLibraryDocuments(): Observable<any> {
        return this.http.get(this.libraryUrl, this.httpOptions);
    }

    getAgreementId(pet: Pet, documentId: string): Observable<any> {
        // Information about agreement
        const agreementInfo = {
            'fileInfos': [{
                'libraryDocumentId': documentId 
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
                },
                {
                    "fieldName": "bday",
                    "defaultValue": pet.bday,
                },
                {
                    "fieldName": "breed",
                    "defaultValue": pet.breed,
                },
                {
                    "fieldName": "weight",
                    "defaultValue": pet.weight,
                },
                {
                    "fieldName": "color",
                    "defaultValue": pet.color,
                  }
            ],
            'signatureType': 'ESIGN',
            'state': 'IN_PROCESS'
        };

        console.log(agreementInfo);

        return this.http.post(this.agreementUrl, agreementInfo, this.httpOptions);
    }
}
