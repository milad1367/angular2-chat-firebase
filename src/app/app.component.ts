import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from './chat-message';
import { ChatMessagesService } from './chat-messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
