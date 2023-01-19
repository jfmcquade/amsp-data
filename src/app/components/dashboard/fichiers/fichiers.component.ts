import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFilesComponent } from './add-files/add-files.component';
import { ReadXlsxFileComponent } from '../../read-xlsx-file/read-xlsx-file.component';
import { UploadFileComponent } from '../../upload-file/upload-file.component';
import {MatSnackBar} from '@angular/material/snack-bar';    
import { DataService } from 'src/app/services/shared/service/data.service';

@Component({
  selector: 'app-fichiers',
  templateUrl: './fichiers.component.html',
  styleUrls: ['./fichiers.component.scss']
})
export class FichiersComponent implements OnInit {

  constructor(
    public dialog : MatDialog,
    private dataApi : DataService,
    private _snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  addFiles() {
//alert('Vous etes entrain d\'ajouter un fichier')
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title : 'Telecharger un fichier'
    }
    const dialogRef = this.dialog.open(AddFilesComponent, dialogConfig);
    //ReadXlsxFileComponent, UploadFileComponent,
    dialogRef.afterClosed().subscribe(data =>{
      if (data) {
        //console.log("Enregistrer le fichier :", data);
        this.dataApi.addFiles(data);
      }  
    })
  }
openSnackBar(message: string, action: string){
  this._snackBar.open(message, action);
  
}

}
