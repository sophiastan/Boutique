import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Angular service for managing products
@Injectable()
export class SignService {
    baseUrl = 'https://api.na2.echosign.com/';
    uploadUrl = this.baseUrl + 'api/rest/v6/transientDocuments';
    sendUrl = this.baseUrl + 'api/rest/v6/agreements';

    constructor(private http: HttpClient) {}

    uploadFile(file: File): Observable<any> {
        // Encodes file input content
        const formData = new FormData();
        formData.append('form-data', file);

        // Access Token obtained from authorization code (code in the request, client id, client secret) 
        const accessToken = 'CBNCKBAAHBCAABAA18wDtLFTzDSbu1MpP3DVmpTlyEEpyFbx';

        // Specify access token
        const headers = {
             'Authorization': 'Bearer ' + accessToken,
             'Content-Type': 'multipart/form-data'
         };

        return this.http.post(this.uploadUrl, formData, {'headers': headers});
    }

    sendAgreement(documentId: string): Observable<any> {
        const accessToken = 'CBNCKBAAHBCAABAA18wDtLFTzDSbu1MpP3DVmpTlyEEpyFbx';

        const headers = {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        };

        // Information about agreement
        const agreementInfo = {
            'fileInfos': [{
                'transientDocumentId': documentId
            }],
            'name': 'AgreementForm',
            'participantSetsInfo': [{
                'memberInfos': [{
                    'email': 'signer@waggyfriendboutique.com'
                }],
                'order': 1,
                'role': 'SIGNER'
            }],
            'signatureType': 'ESIGN',
            'state': 'IN_PROCESS'
        };

        return this.http.post(this.sendUrl, agreementInfo, {'headers': headers});
    }
}
