import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadXlsxFileComponent } from './components/read-xlsx-file/read-xlsx-file.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { VideosComponent } from './components/dashboard/videos/videos.component';
import { ImagesComponent } from './components/dashboard/images/images.component';
import { FichiersComponent } from './components/dashboard/fichiers/fichiers.component';
import { ViewFilesComponent } from './components/dashboard/fichiers/view-files/view-files.component';
import { ViewImagesComponent } from './components/dashboard/images/view-images/view-images.component';
import { ViewVideosComponent } from './components/dashboard/videos/view-videos/view-videos.component';
//import { LoginComponent } from './components/auth/login/login.component';
// route guard
import { AuthGuard } from './services/shared/service/guard/authguard.guard';
//import { AppComponent } from './app.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { SignUpComponent } from './components/authentification/sign-up/sign-up.component';
import { SignInComponent } from './components/authentification/sign-in/sign-in.component';
import { VerifyEmailComponent } from './components/authentification/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/authentification/forgot-password/forgot-password.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';



const routes: Routes = [
 /* {path: "", component: UploadFileComponent},
  {path: "excel", component: ReadXlsxFileComponent},
  {path: "uploadFile", component: UploadFileComponent}*/


  //{path: 'dashboard', children : [

{path: 'sidebar', children : [
    {path:'', redirectTo:'/', pathMatch:'full'},
    //{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path:'videos', component: VideosComponent},
    {path:'videos/:id', component: ViewVideosComponent}, 
    {path:'images', component: ImagesComponent},
    {path:'images/:id', component: ViewImagesComponent}, 
    {path:'fichiers', component: FichiersComponent},
    {path:'fichiers/:id', component: ViewFilesComponent},
    //{path:'landing', component: LandingComponent},
    //{path:'signup', component: SignUpComponent}, 
    //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'verify-email-address', component: VerifyEmailComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'register-user', component: SignUpComponent }
  ] , canActivate : [AuthGuard] },
    //{path: 'login', component: LoginComponent},
    //{path : '', redirectTo: 'home', pathMatch: 'full'}
    //{path: 'sign-in', component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }