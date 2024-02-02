import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementList } from './element-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: ` <div [ngClass]="{'element-completed': listItem.completed, 'element': !listItem.completed}" (click)="toggleCheckbox()">
     <input type="checkbox" [(ngModel)]="listItem.completed"/>
    {{listItem.id}}. {{listItem.text}}
  </div> `,
  styleUrl: './element.component.css',
})
export class ElementComponent {
  @Input() listItem!:ElementList


  toggleCheckbox() {
    this.listItem.completed = !this.listItem.completed;
  }
}
