import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private afs : AngularFirestore,
              private http : HttpClient) { }

  addFiles (files : any) {
    files.uuid = this.afs.createId();
    return this.afs.collection("Files/").add(files);
  } 
  postFiles (data : any){
    return this.http.post<any>("http://localhost:4200/dashboard/fichiers", data);
  }
  getFiles (){
    return this.http.get<any>("http://localhost:4200/dashboard/fichiers");
  }
  putFiles (data:any, id:number){
 return this.http.put<any>("http://localhost:4200/dashboard/fichiers"+id, data);
  }
  deleteFiles (id:number){
return this.http.delete<any>("http://localhost:4200/dashboard/fichiers"+id);
  }
}