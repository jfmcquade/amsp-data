import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = authState(this.auth);

  constructor(
    private auth : AngularFireAuth,
    private router : Router 
  ) { }

  login (username : string, password : string){
    this.auth
    .signInWithEmailAndPassword(username, password)
    .then(result => {
      this.auth.authState.subscribe(async user =>{
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          await this.router.navigate(['./dashboard']);
          location.reload();
        }
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  async logout(){
    localStorage.setItem('user', 'null');
    await this.router.navigate(['']);
    location.reload();
  }

  isUserLoggedIn(){
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  signUp(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
}
function authState(auth: AngularFireAuth) {
  console.error('Function not implemented.');
}

function from(arg0: any) {
  throw new Error('Function not implemented.');
}

function createUserWithEmailAndPassword(auth: AngularFireAuth, email: string, password: string): any {
  auth.createUserWithEmailAndPassword(email, password)
  throw new Error('Function not implemented.');
}

function updateProfile(user: any, arg1: { displayName: void; }): any {
  throw new Error('Function not implemented.');
}

