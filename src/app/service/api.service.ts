import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/add/operator/map';
// import { Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http"
// import { Observable } from 'rxjs/Rx';
import { map } from "rxjs/operators";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import "rxjs/Rx"
import { Observable } from 'rxjs';

var apiUrl = "http://testwallet.angelium.net/api/"

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private router: Router, private http: HttpClient) { }
    /*login method*/
    Login(end_point, data) {
       
        return this.http.post(apiUrl + '/' + end_point, data).map(this.handleSuccess).catch(this.handleError);
    }

    /*method for post request */
    POST(end_point, data) {
        return this.http.post(apiUrl + '/' + end_point, data, this.jwt()).map(this.handleSuccess).catch(this.handleError);
    }

    /*method for update */
    PUT(end_point, data) {
        return this.http.put(apiUrl + '/' + end_point, data, this.jwt()).map(this.handleSuccess).catch(this.handleError);
    }

    /*delete method*/
    DELETE(end_point) {
        return this.http.delete(apiUrl + '/' + end_point, this.jwt()).map(this.handleSuccess).catch(this.handleError);
    }


    /*method for generate token*/
    GenerateToken(end_point, data, header) {

        let headers = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + header
                })
        }
        // NProgress.start();
        return this.http.post(apiUrl + '/' + end_point, data, headers).map(this.handleSuccess).catch(this.handleError);

    }

    private handleSuccess(res: HttpResponse<any>) {
        return res;
    }

    private handleError(error: any) {
        return Observable.throw(error);
    }

    private jwt() {
        // Hardcoded for testing purpose only
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            this.router.navigate(['/login']);
            return;
        }
        let headers = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Authorization': user.access_token
                })
        }
        return headers;
    }
}
