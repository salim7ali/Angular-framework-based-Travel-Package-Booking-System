import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ShareService} from '../share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // get data():string { 
  //   return this.shareservice.sharedData;
  // }
  // set data(value: string) {
  //   this.shareservice.sharedData = value;
  // }
  // bookingC(choice:number) {
  //   BookingsComponent.bookingChoice();
  //   alert("choice "+ choice);
  // }

  constructor(private data: ShareService/*private router: Router, private userService: UserService */) { }
  text = '';

  updateText(text){
    this.data.updateData(text);
  }
  ngOnInit() {
    
    // this.userService.getUserClaims().subscribe((data: any) => {
    //   this.userClaims = data;

    // });
  }

  Logout() {
    // localStorage.removeItem('userToken');
    // this.router.navigate(['/login']);
  }


}






