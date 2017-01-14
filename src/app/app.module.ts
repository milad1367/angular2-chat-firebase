import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectRoomComponent } from './select-room/select-room.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
