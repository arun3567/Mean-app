import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class FormService{

  postData : any [] = []
  fields = new BehaviorSubject<any>([
    {fieldname : 'name',name : 'name',type : 'input'},
    {fieldname : 'status',name : 'status',type : 'dropdown'},
    {fieldname : 'is_true',name : 'is_true',type : 'radio'},
  ])

  constructor(){}

  setFieldsData(data: any) {
    const currentFields = this.fields.value;
    const updatedFields = [...currentFields, data];
    this.fields.next(updatedFields);
    console.log(this.fields.getValue());
  }

  getFieldsData(){
    return this.fields.asObservable();
  }
}
