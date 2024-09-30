import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-seventeen';
}
