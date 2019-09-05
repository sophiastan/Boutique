import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Angular service for managing products
@Injectable()
export class SignService {
    baseUrl = 'https://api.na2.echosign.com/';
    uploadUrl = this.baseUrl + 'api/rest/v6/transientDocuments';
    sendUrl = this.baseUrl + 'api/rest/v6/agreements';
    statusUrl = this.baseUrl + 'api/rest/v6/agreements/3AAABLblqZNOTREALAGREEMENTID5_BjiH';

    constructor(private http: HttpClient) {}

    uploadFile(file: File): Observable<HttpEvent<any>> {
        let formData = new FormData();
        formData.append('upload', file);

        const url = this.uploadUrl;

        let params = new HttpParams();
        // let headers = new HttpHeaders({
        //     'Authorization': 'Bearer' + localStorage.getItem('accessToken')
        // });
        // do not need to set headers, causes problems
        let headers = new HttpHeaders({
            'Content-Type': undefined
        });
        
        const options = {
            headers: headers,
            params: params,
            reportProgress: true
        };

        const req = new HttpRequest('POST', url, formData, options);
        return this.http.request(req);
    }

    // uploadFile1(fileToUpload: File): Observable<boolean> {
    //     const endpoint = this.uploadUrl;
    //     const formData: FormData = new FormData();
    //     formData.append('filekey', fileToUpload, fileToUpload.name);
    //     let headers = new HttpHeaders({
    //         'Content-Type': undefined
    //     });
        
    //     const options = {
    //         headers: headers,
    //         reportProgress: true
    //     };
    //     return this.http
    //         .post(endpoint, formData, options)
    //         .map(() => { return true; })
    //         .catch((error) => Observable.throw(error));
    // }

    sendFile<T>(url: string, data: any): Observable<T> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        let agreementInfo = {
            "fileInfos": [{
                "transientDocumentId": "<copy-transient-from-the-upload-document-step>"
            }],
            "name": "AgreementForm",
            "participantSetsInfo": [{
                "memberInfos": [{
                    "email": "signer@waggyfriendboutique.com"
                }],
                "order": 1,
                "role": "SIGNER"
            }],
            "signatureType": "ESIGN",
            "state": "IN_PROCESS"
        }

        url = this.sendUrl;
        data = agreementInfo;

        return this.http.post<T>(url, JSON.stringify(data), {headers: headers});
    }
}
