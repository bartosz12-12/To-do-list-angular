import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from '../element/element.component';
import { ElementList } from '../element/element-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PopUpService } from '../pop-up.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ElementComponent,
    DragDropModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="conteiner">
      <div
        class="lista-elementow"
        cdkDropList
        (cdkDropListDropped)="drop($event)"
      >
        <app-element
          *ngFor="let element of toDoList"
          [listItem]="element"
          cdkDrag
          >{{ element.text }}></app-element
        >
      </div>
    </div>
    <div *ngIf="popUp" class="overlay" (click)="back()">
      <div class="popup" (click)="preventClosing($event)">
        <h2 class="addelement">Add Element</h2>
        <form class="form" [formGroup]="applayForm" (submit)="submitElement()">
          <label for="text">Text</label>
          <input id="text" type="text" formControlName="text" />
          <button class="button" type="submit">Create</button>
        </form>
      </div>
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  popUp = false;
  toDoList: ElementList[] = [
    { id: 1, text: 'Pranie', completed: false },
    { id: 2, text: 'Prasowanie', completed: false },
    { id: 3, text: 'Zakupy spożywcze', completed: false },
    { id: 4, text: 'Nauka programowania', completed: false },
    { id: 5, text: 'Spacer z psem', completed: false },
    { id: 5, text: 'Spacer z psem', completed: false },
    { id: 5, text: 'Spacer z psem', completed: false },
    { id: 5, text: 'Spacer z psem', completed: false },
    { id: 5, text: 'Spacer z psem', completed: false },

  ];
  count: number = this.toDoList.length + 1;
  applayForm = new FormGroup({
    text: new FormControl(''),
  });

  back() {
    this.popUpService.togglePopUp();
  }
  preventClosing(event: Event): void {
    event.stopPropagation();
}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.toDoList, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.popUpService.popUp$.subscribe((popUp) => {
      this.popUp = popUp;
    });
  }

  submitElement() {
    this.toDoList.push({
      id: this.count,
      text: this.applayForm.value.text ?? '',
      completed: false,
    });
    this.count++;
    this.popUpService.togglePopUp();

  }

  constructor(private popUpService: PopUpService) {}
}
