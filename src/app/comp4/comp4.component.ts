import { Component } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component {
  userName: any
  constructor(private utilityService: UtilityService) {
    this.utilityService.userName.subscribe(uname => {
      this.userName = uname
    })

  }
  updateUserName(uname: any) {
    this.utilityService.userName.next(uname.value)
  }
}
