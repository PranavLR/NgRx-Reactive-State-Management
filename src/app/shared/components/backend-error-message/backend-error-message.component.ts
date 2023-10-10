import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';

@Component({
  selector: 'app-backend-error-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-error-message.component.html',
  styleUrls: ['./backend-error-message.component.scss']
})
export class BackendErrorMessageComponent implements OnInit{
  @Input() backendErrors: BackendErrorsInterface = {};
  
  errorMessages: string[] = [];
  
  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const message = this.backendErrors[name].join(' ')
      return `${name} ${message}`;
    })
  }
}
