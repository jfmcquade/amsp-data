import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadXlsxFileComponent } from './components/read-xlsx-file/read-xlsx-file.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { VideosComponent } from './components/dashboard/videos/videos.component';
import { ImagesComponent } from './components/dashboard/images/images.component';
import { FichiersComponent } from './components/dashboard/fichiers/fichiers.component';
import { ViewFilesComponent } from './components/dashboard/fichiers/view-files/view-files.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthguardGuard } from './services/shared/service/guard/authguard.guard';
import { ViewImagesComponent } from './components/dashboard/images/view-images/view-images.component';
import { ViewVideosComponent } from './components/dashboard/videos/view-videos/view-videos.component';

const routes: Routes = [
 /* {path: "", component: UploadFileComponent},
  {path: "excel", component: ReadXlsxFileComponent},
  {path: "uploadFile", component: UploadFileComponent}*/
  {path: 'dashboard', children : [
    {path:'', redirectTo:'videos', pathMatch:'full'},
    {path:'videos', component: VideosComponent},
    {path:'videos/:id', component: ViewVideosComponent}, 
    {path:'images', component: ImagesComponent},
    {path:'images/:id', component: ViewImagesComponent}, 
    {path:'fichiers', component: FichiersComponent},
    {path:'fichiers/:id', component: ViewFilesComponent}, 
  ] , canActivate : [AuthguardGuard] },
    {path: 'login', component: LoginComponent},
    {path : '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }