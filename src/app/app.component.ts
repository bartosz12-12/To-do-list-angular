import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PopUpService } from './pop-up.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="main">
      <header>
          <h1 class="title">TO DO LIST</h1>
          <div class="add" (click)="add()">+</div>
      </header>
      <section class="section"><router-outlet></router-outlet></section>
    </main>
  `,
  imports: [CommonModule, RouterOutlet, RouterModule],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list';
  popUp = false;

  constructor(private popUpService: PopUpService) {}


  add(): void {
    this.popUpService.togglePopUp();
  }

}
