import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadXlsxFileComponent } from './components/read-xlsx-file/read-xlsx-file.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { FichiersComponent } from './components/dashboard/fichiers/fichiers.component';
import { ViewFilesComponent } from './components/dashboard/fichiers/view-files/view-files.component';
//import { LoginComponent } from './components/auth/login/login.component';
// route guard
import { AuthGuard } from './services/shared/service/guard/authguard.guard';
//import { AppComponent } from './app.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { SignInComponent } from './components/authentification/sign-in/sign-in.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';



const routes: Routes = [
  { path: 'login', component: SignInComponent },
  {
    path: 'dashboard', canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      //{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fichiers', component: FichiersComponent },
      { path: 'fichiers/:id', component: ViewFilesComponent },
    ]
    // , canActivate : [AuthGuard]
  },
  //{path : '', redirectTo: 'home', pathMatch: 'full'}
  //{path: 'sign-in', component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }