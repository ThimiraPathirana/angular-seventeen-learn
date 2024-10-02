import { Component } from '@angular/core';
import { CapitalizePipe } from '../custom/capitalize.pipe';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from '../custom/file-size.pipe';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [CommonModule, CapitalizePipe, FileSizePipe],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css'
})
export class CustomPipesComponent {

  fileSizes: number[] = [0, 1024, 1048576];
}
