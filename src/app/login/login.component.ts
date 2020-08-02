import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  constructor( private route:Router, private router:Router) { }

  ngOnInit() {
  }

SubmitClicked() {
  

  if ((this.email == "test@test.com.au" && this.password == "password") || (this.email == "test2@test.com.au" && this.password == "password2") || (this.email == "test3@test.com.au" && this.password == "password3")) {
    console.log("Credentials matching");
    this.router.navigateByUrl('/account');
  } else {
    alert("Wrong Logins");
  }


  }
}

