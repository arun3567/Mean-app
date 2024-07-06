import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  list = [{name : 'BMW'},{name : 'Audi'},{name : 'Benz'},{name : 'Range Rover'}];

  cars = [{name : 'Nissan'},{name : 'Skoda'},{name : 'Ferrari'},{name : 'Lamborghini'}]

  displayedColumns : ['name','mobile','address'];

  dataSource : any [] = [];

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


}
