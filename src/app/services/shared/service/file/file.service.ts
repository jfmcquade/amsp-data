import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private storage: AngularFireStorage) { }

  uploadFile(file: File, filepath: string) {
    console.log("File:", file)
    console.log("filepath:", filepath)

    const task = this.storage.upload(filepath, file)

    console.log("task:", task)

    // TO DO: write function to upload file to the amsp storage bucket via Firebase Storage
    // See https://github.com/angular/angularfire/blob/master/docs/storage/storage.md
    // Look for other tutorials on "upload file to storage with angularfire"
  }

  getFile() {}

  deleteFile() {}
}
