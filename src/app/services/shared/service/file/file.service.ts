import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  allFiles: any[] = []

  constructor(private storage: AngularFireStorage) { }

  async uploadFile(file: File, filepath: string) {
    console.log("File:", file)
    console.log("filepath:", filepath)

    // const uploadTask = this.storage.upload(filepath, file)
    // const uploadProgress$ = uploadTask.percentageChanges()

    // return uploadProgress$
    console.log("storage.Storage:", this.storage.storage)
    const fileRef = this.storage.ref(filepath).child(file.name)
    const result = await fileRef.put(file)
    console.log("result:", result)

    // TO DO: write function to upload file to the amsp storage bucket via Firebase Storage
    // See https://github.com/angular/angularfire/blob/master/docs/storage/storage.md
    // Look for other tutorials on "upload file to storage with angularfire"
  }

  listAllFiles() {
    const ref = this.storage.ref('');
    return ref.listAll()
    
    
    // .subscribe(async (result) => {
    //   console.log("result:", result)
    //   this.allFiles.push(...result.items)

    //   result.prefixes.forEach(async (folderRef) => {
    //     const folderResult = await folderRef.listAll()
    //     this.allFiles.push(...folderResult.items)
    //   })
    // })
  }

  getFile() {  }

  deleteFile() { }
}
