import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChatMessage } from '../chat-message';
@Component({
  selector: 'app-chat-message',
  template: `
  <div>
    <h3>
      {{ message.author }}
    </h3>
    <p>
      {{ message.body}}
    </p>
  </div>
  `,
 
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChatMessageComponent {
  @Input() message: ChatMessage;
  
}
