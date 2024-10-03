import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {

  isActive:boolean = true;
  backgroundColor:string = 'greenyellow';
  size:string = '10px';
  name: string = '';

  toggleActive() {
    this.isActive = !this.isActive;
  }

  changeStyle() {
    this.backgroundColor = 'red';
    this.size = '30px';
  }
}
