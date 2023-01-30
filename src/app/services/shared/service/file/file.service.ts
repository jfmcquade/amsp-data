import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private storage: AngularFireStorage) { }

  uploadFile(file: File) {
    console.log("File:", file)

    // TO DO: write function to upload file to the amsp storage bucket via Firebase Storage
    // See https://github.com/angular/angularfire/blob/master/docs/storage/storage.md
    // Look for other tutorials on "upload file to storage with angularfire"
  }

  getFile() {}

  deleteFile() {}
}
