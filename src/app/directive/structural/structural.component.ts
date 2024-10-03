import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css'
})
export class StructuralComponent {

  a:number = 5;
  b:number = 10;

  users: string[] = ['Vije', 'Surya', 'Karthik', 'Danush'];

  role:string = 'manager';
}
