import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteFilesComponent } from '../../fichiers/delete-files/delete-files.component';

@Component({
  selector: 'app-delete-images',
  templateUrl: './delete-images.component.html',
  styleUrls: ['./delete-images.component.scss']
})
export class DeleteImagesComponent implements OnInit {

  fileName !: string;
  title !: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<DeleteFilesComponent>
  ) { 
    this.fileName = data.fileName;
    this.title = data.title;
  }

  ngOnInit(): void {}

  close(){
    this.dialogRef.close();
  }

  delete(){
    const deleteFiles = true;
     this.dialogRef.close(deleteFiles);
  }

}
