import {Component, Inject,Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ChatMessagesService } from '../chat-messages.service';
import { ChatMessage } from '../chat-message';
class ChatMessageFormModel {
  author: string;
  body: string;
}
@Component({
  selector: 'app-chat-message-form',
  templateUrl: './chat-message-form.component.html',
  styleUrls: ['./chat-message-form.component.css']
})
export class ChatMessageFormComponent {
  @Input() roomId: string;
  private chatMessageForm: FormGroup;
  constructor(private fb: FormBuilder,private cs: ChatMessagesService) {
    this.chatMessageForm = this.fb.group({
      'author': ['', Validators.required],
      'body': ['', Validators.required]
    });
  }

    saveMessage() {
    if (this.chatMessageForm.valid) {
      this.cs.createNewMessage(this.roomId, <ChatMessage> this.chatMessageForm.value);
      const author = this.chatMessageForm.controls['author'].value;
      this.chatMessageForm.reset();
      this.chatMessageForm.controls['author'].setValue(author);
    }
  }

}
