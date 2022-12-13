import { Injectable } from '@angular/core';
import { Functions, getFunctions, httpsCallable, connectFunctionsEmulator } from '@angular/fire/functions';
import { FirebaseApp } from '@angular/fire/app';
@Injectable({
  providedIn: 'root'
})
export class FirebaseFunctionCallerService {
  functions: Functions = getFunctions()

  constructor(private app: FirebaseApp) { }

  async uploadToStorageBucket(data: any) {
    const uploadToStorageBucket = httpsCallable(this.functions, "uploadToStorageBucket");
    return uploadToStorageBucket({ data })
      .then((result) => {
        const data = result.data;
        console.log(data)
        return data
      })
      .catch((error) => {
        console.log(error)
        return error
      });
  }

  async addMetaDataRow(data: any) {
    const addMetaDataRow = httpsCallable(this.functions, "addMetaDataRow");
    return addMetaDataRow({ data })
      .then((result) => {
        const data = result.data;
        console.log(data)
        return data
      })
      .catch((error) => {
        console.log(error)
        return error
      });
  }
}
