import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { InputComponent } from './form-component/input/input.component'
import { DropdownComponent } from './form-component/dropdown/dropdown.component';
import { FormGroup } from '@angular/forms';
@Directive({
  selector: '[formDirective]',
})
export class FormDirective {

  @Input('formDirective') item: { field: any, form: FormGroup, index: number };

  constructor(public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() {
    this.viewContainerRef.clear();

    let componentFactory;
    if (this.item.field.type === 'input') {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(InputComponent);
    } else if (this.item.field.type === 'dropdown') {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(DropdownComponent);
    } else {
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(InputComponent);
    }

    if (componentFactory) {
      const componentRef = this.viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as any).data = this.item;
      (componentRef.instance as any).form = this.item.form.get(['fields', this.item.index]) as FormGroup;
    }
  }
}
