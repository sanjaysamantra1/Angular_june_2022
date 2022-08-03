import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }
  clearMessages() {
    this.subject.next(null);
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable(); // converts subject to observable
  }
}
