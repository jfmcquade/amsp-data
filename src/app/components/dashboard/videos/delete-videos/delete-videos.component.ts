import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-videos',
  templateUrl: './delete-videos.component.html',
  styleUrls: ['./delete-videos.component.scss']
})
export class DeleteVideosComponent implements OnInit {

  fileName !: string;
  title !: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<DeleteVideosComponent>
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
