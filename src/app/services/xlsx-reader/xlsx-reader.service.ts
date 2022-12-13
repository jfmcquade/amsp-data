import { Injectable } from '@angular/core';
import readXlsxFile from 'read-excel-file';

@Injectable({
  providedIn: 'root'
})
export class XlsxReaderService {

  constructor() { }

  public async xlsxFileToConsole(file: File | null) {
    if (file) {
      const rows = await readXlsxFile(file)
      console.log("rows: ", rows)
    }
    console.log("No file provided")
  }
}
