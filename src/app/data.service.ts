import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})

export class DataService {

  subject = new Subject<any>();

  nesteddata = [
    {
      'name' : 'table1',
      'orders' : {
        'order name' : 'order1',
        'data' : [
          {name : 'Arun',order:2133,mobile :9003714868,city:'Erode'},
          {name : 'John',order:2344,mobile :7683898,city:'New York'},
          {name : 'Sam',order:5622,mobile :9283983,city:'Vegas'}
        ]
      }
    },
    {
      'name' : 'table1',
      'orders' : {
        'order name' : 'order1',
        'data' : [
          {name : 'Arun',order:2133,mobile :9003714868,city:'Erode'},
          {name : 'John',order:2344,mobile :7683898,city:'New York'},
          {name : 'Sam',order:5622,mobile :9283983,city:'Vegas'}
        ]
      },
    }
  ]

  record =  new BehaviorSubject<any[]>([
    {name : 'Arun',order:2133,mobile :9003714868,address : [{city:'Erode',area : 'KKN Road'},{country:'India'}]},
    {name : 'John',order:2344,mobile :7683898,address : [{city:'Erode',area : 'KKN Road'},{country:'India'}]},
    {name : 'Sam',order:5622,mobile :9283983,address : [{city:'Erode',area : 'KKN Road'},{country:'India'}]}
  ]);

  private data = ['arun'];

  constructor(private http : HttpClient){
  }

  getData(){
    let url = 'https://reqres.in/api';
    return this.http.get(url + 'users');
  }

  setData(d){
    this.subject.next(d);
    console.log(this.subject)
  }

  getSubject(){
    return this.subject.asObservable();
  }

  setRecordData(d?){
    this.record.next(d);
  }

  getRecordData(){
    return this.record.asObservable();
  }
}
