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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReadXlsxFileComponent,
    UploadFileComponent
  ],
  imports: [
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
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
