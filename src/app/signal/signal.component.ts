import { Component, effect, Injector, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  counter = signal(0);
  
  userName = signal('Thimira');

  users = signal(['Vije', 'Surya']);

  video = signal({
    'title': 'Angular 17',
    'description': 'Angular leaning',
    'note': 'signal'
  })

  setUpdate() {
    this.counter.set(20);
  }

  counterUpdate() {
    this.counter.update(counter => counter + 20);
  }

  counterVideo() {
    this.video.set({
      'title': 'New title',
      'description': 'New description',
      'note': 'signal'
    })
  }

 
}
