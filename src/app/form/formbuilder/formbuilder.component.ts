import { Component, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FieldPropertiesComponent } from '../field-properties/field-properties.component';
import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FormService } from '../form.service';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit{

  fieldslist : any[] = [
    {'field' : 'input'},
    {'field' : 'dropdown'},
    {'field' : 'radio'},
    {'field' : 'checkbox'},
    {'field' : 'numeric'}
  ]

  fields = []

  dialogRef : any;
  sections: any = [
    { id: 1, fields: [] }
  ];
  @ViewChildren('todoList') todoLists: QueryList<CdkDropList>;
  @ViewChildren('doneList') doneLists: QueryList<CdkDropList>;

  constructor(private formService : FormService,private dialog : MatDialog){}

  ngOnInit() {
    this.formService.getFieldsData().subscribe(res => {
      console.log('res',res)
      this.fields = res;
    })
  }

  ngAfterContentChecked() {
    setTimeout(() => {
      const todoListArray = this.todoLists.toArray();
      const doneListArray = this.doneLists.toArray();

      for (let i = 0; i < doneListArray.length; i++) {
        doneListArray[i].connectedTo = todoListArray;
      }

      for (let i = 0; i < todoListArray.length; i++) {
        todoListArray[i].connectedTo = doneListArray;
      }
    }, 1000);
  }


  onSelectField(item){
    this.dialogRef = this.dialog.open(FieldPropertiesComponent, {
      width: '40%',
      height: '100%',
      position: { top: '0px', right: '0px' },
      data: {field : item},
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.previousContainer.data && event.container.data) {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      }
    }
  }

  addSection() {
    this.sections.push({ id: this.sections.length + 1, fields: [] });
  }

  onSave(){
    console.log(this.sections)
  }

  edit(){
    this.dialogRef = this.dialog.open(DynamicFormComponent, {
      width: '40%',
      height: '100%',
      position: { top: '0px', right: '0px' },
      data: {fields : this.fields,fieldData: {}},
    });
  }

}
