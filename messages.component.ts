import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages: string[] = [
    'Welcome to our Angular app!',
    'You have 3 new notifications.',
    'Check back soon for updates.'
  ];
}
