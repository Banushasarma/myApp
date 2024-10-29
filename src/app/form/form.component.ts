import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  carName: string = '';
  //@Output() carAdded = new EventEmitter<string>();

  constructor(private carService: CarService) {
    this.carService = carService;
  }

  onSubmit() {
    console.log('Car Name:', this.carName);
    //Sending the value to the list component
    //his.carAdded.emit(this.carName);

    //Sending the value using the Car Service
    this.carService.addCarName(this.carName);

    // Clear the input field
    this.carName = '';
  }
}
