import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FileMetadata } from '../../model/fichiers';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore,
    private http: HttpClient) { }

  async addFileMetadata(fileMetadata: FileMetadata) {
    // fileMetadata.id = this.afs.createId();

    // if (fileMetadata.id) {
    //   await this.afs.collection("files/").doc(fileMetadata.id).set(fileMetadata);
    // } else {
      const documentReference = await this.afs.collection("files/").add(fileMetadata);
      await this.afs.doc(documentReference.path).update({id: documentReference.id})
      return documentReference.id
    // }
  }

  getFileMetadata() {

  }

  getAllFileMetadata() {
    return this.afs.collection<FileMetadata>("files").valueChanges()
  }

  updateFiles(fichier : any){
    return this.afs.doc("fichier"+fichier.id).update(fichier);
  }

  deleteFiles(id: string){
    return this.afs.doc("fichier"+id).delete();
  }

  getFilesById(id: string){
    return this.afs.doc("fichier/"+id).valueChanges();
  }

}