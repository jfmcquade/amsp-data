import { Component, OnInit } from '@angular/core';
import { XlsxReaderService } from 'src/app/services//xlsx-reader/xlsx-reader.service';

@Component({
  selector: 'app-read-xlsx-file',
  templateUrl: './read-xlsx-file.component.html',
  styleUrls: ['./read-xlsx-file.component.scss']
})
export class ReadXlsxFileComponent implements OnInit {

  constructor(private xlsxReaderService: XlsxReaderService) {

  }

  ngOnInit(): void {
  }

  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files
    if (files) {
      return this.readFile(files[0])
    }
    return console.log("No file")
  }

  readFile(file: File | null) {
    this.xlsxReaderService.xlsxFileToConsole(file)
  }

}
