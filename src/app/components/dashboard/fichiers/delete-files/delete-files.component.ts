import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-files',
  templateUrl: './delete-files.component.html',
  styleUrls: ['./delete-files.component.scss']
})
export class DeleteFilesComponent implements OnInit {
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
