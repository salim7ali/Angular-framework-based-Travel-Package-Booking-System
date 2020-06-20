import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private content = new BehaviorSubject<string>("1");
  public shareData = this.content.asObservable();
  constructor() { }
  updateData(text){
    this.content.next(text);
  }
}
