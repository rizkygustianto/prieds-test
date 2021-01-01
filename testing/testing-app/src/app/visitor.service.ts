import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Visitor } from './models/Visitor'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  visitorUrl:string = 'http://localhost:3000/users'
  lastVisitorUrl:string = 'http://localhost:3000/users/last'

  constructor(private http:HttpClient) { }

  getVisitors():Observable<Visitor[]> {
    return this.http.get<Visitor[]>(this.visitorUrl)
  }

  getLastVisitor():Observable<Visitor> {
    return this.http.get<Visitor>(this.lastVisitorUrl)
  }

  addVisitor(visitor):Observable<any> {
    return this.http.post(this.visitorUrl, visitor, httpOptions)
  }
}
