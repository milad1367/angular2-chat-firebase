/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChatMessagesService } from './chat-messages.service';

describe('ChatMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatMessagesService]
    });
  });

  it('should ...', inject([ChatMessagesService], (service: ChatMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
