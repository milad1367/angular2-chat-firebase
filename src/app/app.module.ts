import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectRoomComponent } from './select-room/select-room.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { ChatMessagesService } from './chat-messages.service';
const firebaseConfig = {
    apiKey: "AIzaSyBi3EWvzJAgXl1zNEzO1wLtXOB8hoJNU98",
    authDomain: "firetry-beb15.firebaseapp.com",
    databaseURL: "https://firetry-beb15.firebaseio.com",
    storageBucket: "firetry-beb15.appspot.com",
    messagingSenderId: "205225722228"
};
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatMessageComponent,
    ChatMessageFormComponent,
    ChatMessageListComponent,
    NavbarComponent,
    SelectRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([
      {
        path: '',
        component: SelectRoomComponent
      },
      {
        path: 'chat/:roomId',
        component: ChatComponent
      }
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule
  ],
  providers: [ChatMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
