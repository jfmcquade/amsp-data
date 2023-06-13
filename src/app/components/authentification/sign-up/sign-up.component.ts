/*import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/shared/service/auth/auth.service';


export function passwordsMatchValidator() : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password!== confirmPassword) {
      return {
        passwordsDonMatch: true
      }
    } 
    return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.email, Validators.required]),
    password : new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required),

  },
   {validators: passwordsMatchValidator() })


  constructor( private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  get name(){
    return this.signUpForm.get('name');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }

  submit(){
   if (!this.signUpForm.valid) return;
   const {email, password } = this.signUpForm.value; 
   this.authService.signUp(email, password)
  }
}*/
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/shared/service/auth/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
}
