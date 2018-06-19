import { Injectable } from '@angular/core';
//importing http  client to make the request

import {HttpClient,HttpErrorResponse } from '@angular/common/http';

//importing observal variable

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class BookHttpService {
  get(): any {
    throw new Error("Method not implemented.");
  }
  public baseUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor() { 
    console.log("http service is called");
  }
}
