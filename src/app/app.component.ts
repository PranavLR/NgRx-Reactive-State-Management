import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // hostDirectives: [
  // Directives
    /* 
    {
      directive: directiveName
      inputs: [] 
      outputs: []
    } 
    */
  // ]
})
export class AppComponent {
  title = 'Monster Lessons Academy';
}