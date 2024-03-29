import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { AngularFireFunctionsModule, USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/compat/functions';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReadXlsxFileComponent } from './components/read-xlsx-file/read-xlsx-file.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, USE_EMULATOR as USE_FIRESTORE_EMULATOR, SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule, USE_EMULATOR as USE_STORAGE_EMULATOR } from '@angular/fire/compat/storage';
import { MaterialModule } from './material/material/material.module';
import { FichiersComponent } from './components/dashboard/fichiers/fichiers.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { AddFilesComponent } from './components/dashboard/fichiers/add-files/add-files.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteFilesComponent } from './components/dashboard/fichiers/delete-files/delete-files.component';
import { ViewFilesComponent } from './components/dashboard/fichiers/view-files/view-files.component';
import { FilesUploadedComponent } from './components/dashboard/fichiers/files-uploaded/files-uploaded.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './services/shared/service/auth/auth.service';
import { SignInComponent } from './components/authentification/sign-in/sign-in.component';
//import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReadXlsxFileComponent,
    UploadFileComponent,
    FichiersComponent,
    SidebarComponent,
    AddFilesComponent,
    DeleteFilesComponent,
    ViewFilesComponent,
    FilesUploadedComponent,
    HomeComponent,
    SignInComponent,
    
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule, 
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    //ChartsModule, 

  ],
  providers: [
    { provide: FIRESTORE_SETTINGS, useValue: { ignoreUndefinedProperties: true } },
    { provide: USE_AUTH_EMULATOR, useValue: !environment.production ? ['http://localhost:9099'] : undefined },
    { provide: USE_FIRESTORE_EMULATOR, useValue: !environment.production ? ['localhost', 8080] : undefined },
    { provide: USE_FUNCTIONS_EMULATOR, useValue: !environment.production ? ['localhost', 5001] : undefined },
    { provide: USE_STORAGE_EMULATOR, useValue: !environment.production ? ['localhost', 9199] : undefined },
    AuthService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ 
    AddFilesComponent,
  ]
})
export class AppModule { }