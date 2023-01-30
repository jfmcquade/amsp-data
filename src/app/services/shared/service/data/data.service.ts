import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore,
    private http: HttpClient) { }

  addFileMetadata(fileMetadata: any) {
    // files.uuid = this.afs.createId();
    // return this.afs.collection("Files/").add(files);

    // TODO: write function to upload metadata
  }

  getFileMetadata() {
    
  }
  
}