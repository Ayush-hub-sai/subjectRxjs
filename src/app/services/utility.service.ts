import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  userName = new Subject<any>()
  BehaviourUserName = new BehaviorSubject("Ganesh")
}
