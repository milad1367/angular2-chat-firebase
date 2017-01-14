import { Component, OnInit, Input  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../chat-message';
import { ChatMessagesService } from '../chat-messages.service';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.css']
})
export class ChatMessageListComponent implements OnInit {
  @Input() roomId: string;
  messages: Observable<ChatMessage[]>;
  constructor() { }

  ngOnInit() {
  }
  trackByKey(index: number, entry: ChatMessage) {
    return entry.$key;
  }

}
