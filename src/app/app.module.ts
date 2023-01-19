import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFunctions,getFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReadXlsxFileComponent } from './components/read-xlsx-file/read-xlsx-file.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MaterialModule } from './material/material/material.module';
import { VideosComponent } from './components/dashboard/videos/videos.component';
import { ImagesComponent } from './components/dashboard/images/images.component';
import { FichiersComponent } from './components/dashboard/fichiers/fichiers.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { AddFilesComponent } from './components/dashboard/fichiers/add-files/add-files.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReadXlsxFileComponent,
    UploadFileComponent,
    VideosComponent,
    ImagesComponent,
    FichiersComponent,
    SidebarComponent,
    AddFilesComponent,
  ],
  imports: [
    MaterialModule,
    AngularFireModule,
    AngularFirestoreModule,   
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFunctions(() => {
      const functions = getFunctions()
      if (!environment.production) {
        connectFunctionsEmulator(functions, 'localhost', 5001)
      }
      return functions
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  bootstrap: [AppComponent],
  entryComponents: [ 
    AddFilesComponent,
  ]
})
export class AppModule { }
