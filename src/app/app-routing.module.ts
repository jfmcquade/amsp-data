import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadXlsxFileComponent } from './components/read-xlsx-file/read-xlsx-file.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { VideosComponent } from './components/dashboard/videos/videos.component';
import { ImagesComponent } from './components/dashboard/images/images.component';
import { FichiersComponent } from './components/dashboard/fichiers/fichiers.component';

const routes: Routes = [
 /* {path: "", component: UploadFileComponent},
  {path: "excel", component: ReadXlsxFileComponent},
  {path: "uploadFile", component: UploadFileComponent}*/
  {path: 'dashboard', children : [
    {path:'', redirectTo:'videos', pathMatch:'full'},
    {path:'videos', component: VideosComponent},
    {path:'images', component: ImagesComponent},
    {path:'fichiers', component: FichiersComponent}

  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }