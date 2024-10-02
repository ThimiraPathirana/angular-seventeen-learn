import { Component } from '@angular/core';
import { ImpurePipe } from '../custom/impure.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-impure-pipes',
  standalone: true,
  imports: [ImpurePipe, FormsModule, CommonModule],
  templateUrl: './impure-pipes.component.html',
  styleUrl: './impure-pipes.component.css'
})
export class ImpurePipesComponent {

  users: string[] = ['Vije', 'Surya', 'Karthik', 'Danush', 'Kamalahasan', 'Varusi', 'Vasi', 'Shankar'];
  searchTerm: string = '';
}
