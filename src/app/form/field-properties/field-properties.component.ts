import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormService } from '../form.service';

@Component({
  selector: 'app-field-properties',
  templateUrl: './field-properties.component.html',
  styleUrls: ['./field-properties.component.css']
})
export class FieldPropertiesComponent implements OnInit{

  form : FormGroup;
  field : any;

  constructor(
    private fb : FormBuilder,
    private formService : FormService,
    public dialogRef: MatDialogRef<FieldPropertiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    this.field = this.data.field;
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      fieldname : new FormControl(null),
      type : new FormControl({value : this.field.field,disabled : true}),
      readonly : new FormControl(null)
    })
  }

  onFormSubmit(){
    let formData = this.form.getRawValue()
    formData['name'] = formData.fieldname;
    this.formService.setFieldsData(formData);
    this.closeDialog()
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
