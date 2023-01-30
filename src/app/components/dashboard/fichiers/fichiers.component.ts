import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFilesComponent } from './add-files/add-files.component';
import { ReadXlsxFileComponent } from '../../read-xlsx-file/read-xlsx-file.component';
import { UploadFileComponent } from '../../upload-file/upload-file.component';
import {MatSnackBar} from '@angular/material/snack-bar';    
import { DataService } from 'src/app/services/shared/service/data/data.service';
import { FileService } from 'src/app/services/shared/service/file/file.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fichiers',
  templateUrl: './fichiers.component.html',
  styleUrls: ['./fichiers.component.scss']
})
export class FichiersComponent implements OnInit {

 //fichierForm !: FormGroup;
 //serveurs : string[] = ['Google Drive', 'Storage Bucket'];
 displayedColumns: string[] = ['serveur', 'nom_fichier', 'annee', 'projet', 'responsable_fichier', 'email', 'observation'];
 dataSource!: MatTableDataSource<any>;

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
  allFiles: any;

  constructor(
    public dialog : MatDialog,
    private dataApi : DataService,
    private fileService: FileService,
    private _snackBar : MatSnackBar,
    //private formBuilder : FormBuilder,

    
  ) { }

  ngOnInit(): void {
    this.allFiles = this.getAllFichiers();
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
      if (!this.editFichiers){
        if (data) {
          //console.log("Enregistrer le fichier :", data);
          // this.dataApi.addFiles(data);
        } 
      } 
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editFichiers(row : any){
 this.dialog.open(AddFilesComponent,{
  data:row
 })
}

  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action);
    
  }
  

getAllFichiers() {
  const files = this.dataApi.getFiles()
  console.log("All files:", files)
  return files

  // this.dataApi.registerFiles()
  // .subscribe({
  //   next:(res)=>{
  //     //console.log(res);
  //     this.dataSource = new MatTableDataSource;
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   },
  //   error(err)=>{
  //     alert("erreur fichier");
  //   }
  // })
  }
}
