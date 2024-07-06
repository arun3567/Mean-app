import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../shared-module/material.module";
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTreeModule} from '@angular/cdk/tree';

import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FieldPropertiesComponent } from './field-properties/field-properties.component';
import { InputComponent } from './form-component/input/input.component';
import { FormDirective } from './form.directive';
import { DropdownComponent } from './form-component/dropdown/dropdown.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';


const routes : Routes = [
  {path : 'formbuilder' ,component : FormbuilderComponent}
]

@NgModule({
  declarations: [
    FormbuilderComponent,
    FieldPropertiesComponent,
    InputComponent,
    FormDirective,
    DropdownComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    CdkTreeModule,
    ReactiveFormsModule,FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class FormModule { }
