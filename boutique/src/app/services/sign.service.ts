import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Angular service for managing products
@Injectable()
export class SignService {
    baseUrl = 'https://api.na2.echosign.com';
    uploadUrl = this.baseUrl + '/api/rest/v6/transientDocuments';
    sendUrl = this.baseUrl + '/api/rest/v6/agreements';

    constructor(private http: HttpClient) {}

    uploadFile(file: File): Observable<any> {
        // Encodes file input content
        const formData = new FormData();
        formData.append('form-data', file);

        // Access Token obtained from authorization code (code in the request, client id, client secret) 
        //const accessToken = '3AAABLblqZhB2DTcTU_NFdPMsgsZJMQY8li8HISRx6PgL5GjPbOddzm34jBt4Bm9o8qmm9mDvWHlPtYwKr20o3SbTIhbPQChG';
        const integrationKey = '3AAABLblqZhCUzZTQu2MvFsn9FbiEexxLzYfCVOK9b9U2HvIBW_9OlYJ-FxZDgnMsih6024_N50ZgKujZC3kt5ccinyfceyVE';

        // Specify access token
        // const headers = {
        //      'Authorization': 'Bearer ' + accessToken,
        //      'Content-Type': 'multipart/form-data'
        //  };

        const t = localStorage.getItem(integrationKey);

        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + t,
                'Content-Type': 'multipart/form-data'
            })
        };


        // let headers = new HttpHeaders();
        // headers.set('Authorization', 'Bearer ' + accessToken);
        // headers.set('Content-Type', null);
        // headers.append('Accept', 'multipart/form-data');

        console.log(httpOptions.headers);
        //console.log(headers);
        
        //return this.http.post(this.uploadUrl, formData, { 'headers': headers });
        return this.http.post(this.uploadUrl, formData, httpOptions);
        console.log("upload worked!");
    }

    sendAgreement(documentId: string): Observable<any> {
        const accessToken = '3AAABLblqZhB2DTcTU_NFdPMsgsZJMQY8li8HISRx6PgL5GjPbOddzm34jBt4Bm9o8qmm9mDvWHlPtYwKr20o3SbTIhbPQChG';

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
        console.log("send file worked!");
    }
}
