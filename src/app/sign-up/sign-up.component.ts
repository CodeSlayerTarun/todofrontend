import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  submitted = false;

  errorMsg ='';

  userModel = new User('diksha','diksha@gmail.com',8652647739,'vasai','diksha','123456','123456');

  constructor(private _loginService : LoginService) {}

  onSubmit() {
    this._loginService.login(this.userModel)
      .subscribe(
        data => console.log('success',data),
        error => console.log('error', error)
      )
  }

  ngOnInit() {
  }

}
