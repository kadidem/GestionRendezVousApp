import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  private dialogState = new BehaviorSubject<boolean>(false);
  dialogState$ = this.dialogState.asObservable();

  openDialog() {
    this.dialogState.next(true);
  }

  closeDialog() {
    this.dialogState.next(false);
  }

}
