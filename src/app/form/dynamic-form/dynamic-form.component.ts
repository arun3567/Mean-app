import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{

  form: FormGroup;
  fieldData: any = {};

  constructor(
    public dialogRef: MatDialogRef<DynamicFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder,
  ){}


  ngOnInit(): void {
      console.log(this.data)
      this.createForm()
  }

  closeDialog(){
    this.dialogRef.close()
  }

  createForm(){
    this.form = this.fb.group({
      fields: this.fb.array([])
    });

    this.data.fields.forEach(field => {
      this.addControl(field);
    });
  }

  get fields() {
    return this.form.get('fields') as FormArray;
  }

  addControl(field: any) {
    const group = this.fb.group({
      [field.name]: ['']
    });
    this.fields.push(group);
  }

  onSubmit() {
    this.data.fields.forEach((field, index) => {
      this.fieldData[field.name] = this.fields.at(index).value[field.name];
    });
    console.log(this.fieldData);
  }
}
