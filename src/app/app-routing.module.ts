import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadXlsxFileComponent } from './components/read-xlsx-file/read-xlsx-file.component';

const routes: Routes = [
  {path: "excel", component: ReadXlsxFileComponent}
  // test comment
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
