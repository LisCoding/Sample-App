import { Component, OnInit } from '@angular/core';
import { Poll } from "./../poll"
import { Router } from "@angular/router";
import { PollApiService } from './../poll-api.service';

@Component({
selector: 'app-create',
templateUrl: './create.component.html',
styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
newPoll =  new Poll();
constructor(private _pollApiService: PollApiService, private _router: Router) { }

ngOnInit() {
}

createPoll(poll){
  console.log("info that we got: ", this.newPoll)
  console.log("this is current user", this._pollApiService.currentUser)
  this.newPoll.creator = this._pollApiService.currentUser
  this._pollApiService.create(this.newPoll)
  .then(status => this.newPoll) // response from the back end
  .catch(err=> console.log("something went wrong creating the Poll!", err))

  this._router.navigate(["/dashboard"])
}

}
