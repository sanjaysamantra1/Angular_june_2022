import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subjectObj = new Subject<any>();

  sendMessage(message: string) {
    this.subjectObj.next({ text: message });
  }

  clearMessages() {
    this.subjectObj.next('');
  }

  getMessage(): Observable<any> {
    return this.subjectObj.asObservable();
    //asObservable - converts subject to observable
  }
}
