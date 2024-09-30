import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css'
})
export class BuiltInPipesComponent {

  toDay: Date = new Date();
  text: string = 'Angular 17 training';
  amount: number = 12345.33455;
  percentVal: number = 0.3464256;

  jsonVal: object = {
    name: 'Angular',
    version: '17',
    release: '2024',
  }

  myArray: number[] = [1,3,6,3,7,5];

  myObject: {[key:string]: string} = {first: 'one', second: '2nd'};
}
