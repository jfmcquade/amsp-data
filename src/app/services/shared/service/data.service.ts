/*import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private afs : AngularFirestore) { }

  addFiles (files : any) {
    files.uuid = this.afs.createId();
    return this.afs.collection("Files/").add(files);
  } 
}*/

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private afs : AngularFirestore) { }

  addFiles (files : any) {
    files.uuid = this.afs.createId();
    return this.afs.collection("Files/").add(files);
  } 
}
