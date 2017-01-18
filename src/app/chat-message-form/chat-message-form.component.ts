import {Component, Inject,Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.chatMessageForm = this.fb.group({
      'author': ['', Validators.required],
      'body': ['', Validators.required]
    });
  }


}
