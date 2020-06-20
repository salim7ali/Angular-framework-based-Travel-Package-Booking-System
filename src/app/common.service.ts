import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
import * as mongoose from 'mongoose';
  
@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  
  saveUser(user){      
    return this.http.post('http://localhost:8080/api/SaveUser/', user).map((response: Response) =>response.json())              
  }  
  
  GetUser(){       
    return this.http.get('http://localhost:8080/api/getUser/')  
            .map((response: Response) => response.json())              
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})  
            .map((response: Response) =>response.json())               
  }  
  
}  