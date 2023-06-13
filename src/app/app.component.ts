/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amsp-data';
}*/
import { Component } from '@angular/core';
import { AuthService } from './services/shared/service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amsp-data';
  userLoggedIn : boolean = false;
  constructor(
    private authApi : AuthService
  ){}

 /* ngOnInit(){
    this.userLoggedIn = this.authApi.isUserLoggedIn();
  }*/
}
