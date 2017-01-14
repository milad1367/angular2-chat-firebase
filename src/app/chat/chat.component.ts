import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  roomId: string;
  constructor(private route: ActivatedRoute) {
    this.roomId = this.route.snapshot.params['roomId'];
  }
 
}
