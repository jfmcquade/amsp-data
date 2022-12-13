import { Component, OnInit } from '@angular/core';
import { FirebaseFunctionCallerService } from 'src/app/services/firebase-function-caller/firebase-function-caller.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor(private firebaseFunctionCaller: FirebaseFunctionCallerService) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files
    if (files) {
      return this.handleFile(files[0])
    }
    return console.log("No file")
  }

  /**
   * TODO: This function should handle the file once it has been chosen
   */
  async handleFile(file: File | null) {
    console.log("file:", file)
    // TODO: convert the file to a suitable format for sending to the storage bucket,
    // then invoke the uploadToStorageBucket(<file data here>) cloud function
    const fileUuid = await this.firebaseFunctionCaller.uploadToStorageBucket("dummyFileData") as string;
    // Once uploaded, take the returned uuid and use it to generate a row of metadata,
    // to be completed by the user.
    // Prompt user to add metadata for file
    const metadataRow = await this.createMetadata(fileUuid)
    // Then send this metadata to the addMetaDataRow() cloud function
    this.firebaseFunctionCaller.addMetaDataRow("dummyMetadataRow");
  };

  async createMetadata(fileUuid: string) {
    // TODO: prompt user to complete additional fields of metadata
    return { fileUuid }
  }
}
