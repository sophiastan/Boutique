import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Angular service for managing products
@Injectable()
export class SignService {
    baseUrl = 'https://api.na2.echosign.com';
    uploadUrl = this.baseUrl + '/api/rest/v6/transientDocuments';
    sendUrl = this.baseUrl + '/api/rest/v6/agreements';
    integrationKey = '3AAABLblqZhCUzZTQu2MvFsn9FbiEexxLzYfCVOK9b9U2HvIBW_9OlYJ-FxZDgnMsih6024_N50ZgKujZC3kt5ccinyfceyVE';


    constructor(private http: HttpClient) {}

    uploadFile(file: File): Observable<any> {
        // Encodes file input content
        const formData = new FormData();
        formData.append('form-data', file);

        // Access Token obtained from authorization code (code in the request, client id, client secret) 
        const contentDisposition = 'form-data; name=";File"; filename="' + file.name + '"';
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.integrationKey
            })
        };

        console.log(httpOptions.headers);
        return this.http.post(this.uploadUrl, formData, httpOptions);
    }

    sendAgreement(documentId: string): Observable<any> {
        const headers = {
            'Authorization': 'Bearer ' + this.integrationKey,
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
