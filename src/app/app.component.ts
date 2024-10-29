import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormComponent,
    FormsModule,
    ListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Hello World';
  clickCount: any;
  items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6'];
  price = 340;
  carNames: string[] = [];
  ngOnInit() {
    this.clickCount = 0;
  }

  clickCountFunct() {
    this.clickCount++;
  }

  onCarAdded(carName: string) {
    console.log(carName, 'From App');
    this.carNames.push(carName);
  }
}
