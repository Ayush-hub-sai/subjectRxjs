import { Component } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  userName: any
  BehaviourUserName: any

  constructor(private utilityService: UtilityService) {
    this.utilityService.BehaviourUserName.subscribe(behaviourName => {
      this.BehaviourUserName = behaviourName
    })

    this.utilityService.userName.subscribe(uname => {
      this.userName = uname
      this.BehaviourUserName = uname
    })

  }

  updateUserName(uname: any) {
    this.utilityService.userName.next(uname.value)
  }
}
