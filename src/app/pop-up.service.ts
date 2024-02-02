import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  private _popUp = new BehaviorSubject<boolean>(true);
  popUp$ = this._popUp.asObservable();

  constructor() { }

  togglePopUp() {
    this._popUp.next(!this._popUp.value);
  }
}
