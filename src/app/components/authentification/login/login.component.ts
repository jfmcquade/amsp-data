import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/shared/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form !: FormGroup;
  email : any = '';
  password : any = '';

  constructor(
    private authApi : AuthService,
    private router : Router,
    //private toast : HoToastService,
    private fb : FormBuilder
  ) {
    this.form = this.fb.group({
      email: [this.email, [Validators.required, Validators.email]],
      password : [this.password, [Validators.required]]
   })
   }

  ngOnInit(): void {
  }

  login(){
    this.authApi.login(this.form.value.email, this.form.value.password);
  }

  logout(){
   this.authApi.logout(); 
  }

  submit() {
    if (!this.form.valid){
      return;
    }
    const {email, password} = this.form.value;
    this.authApi.login(email, password)
  }



}
