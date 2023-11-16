import { Component } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {
  userName: any
  constructor(private utilityService: UtilityService) {
    this.utilityService.userName.subscribe(uname => {
      this.userName = uname
    })

  }
  
  // updateUserName(uname: any) {
  //   this.utilityService.userName.next(uname.value)
  // }
}
