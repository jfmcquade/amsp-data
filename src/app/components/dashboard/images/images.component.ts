import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/shared/service/data/data.service';
import { FileService } from 'src/app/services/shared/service/file/file.service';
import { AddFilesComponent } from '../fichiers/add-files/add-files.component';
import { DeleteFilesComponent } from '../fichiers/delete-files/delete-files.component';
import { AddImagesComponent } from './add-images/add-images.component';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

   //fichierForm !: FormGroup;
 //serveurs : string[] = ['Google Drive', 'Storage Bucket'];
 displayedColumns: string[] = ['serveur', 'nom_fichier', 'annee', 'projet', 'responsable_fichier', 'email', 'observation'];
 dataSource!: MatTableDataSource<any>;

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 allFiles: any;
 row: any;

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
      title : 'Telecharger une image'
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

  viewFiles(row: any){
    window.open('/dashboard/fichiers/'+row.id, '_blank');
  }

deleteFiles(row : any) {
    //alert('Vous etes entrain d\'ajouter un fichier')
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        //dialogConfig.data = row;
        dialogConfig.data = {
          title : 'Supprimé avec succès',
          
        }
        const dialogRef = this.dialog.open(DeleteFilesComponent, dialogConfig);
        //ReadXlsxFileComponent, UploadFileComponent,
        dialogRef.afterClosed().subscribe(data =>{
            if (data) {
              this.dataApi.deleteFiles(row.id);
              this.openSnackBar("Suppression effectuée", "Ok");
          } 
        })
      }

  editFiles(row: any) {    
    if (row.id==null || row.nom_fichier==null){
      return;
    }                                                      //function to edit files
    //alert('Vous etes entrain d\'ajouter un fichier')
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = row;
        dialogConfig.data.title = "Editer le fichier";
        dialogConfig.data.actionBtn = "update";

        const dialogRef = this.dialog.open(AddFilesComponent, dialogConfig);
        //ReadXlsxFileComponent, UploadFileComponent,
        dialogRef.afterClosed().subscribe(data =>{
          if (!this.editFichiers){
            if (data) {
              this.dataApi.updateFiles(data);
              this.openSnackBar("Enregistré avec succès.", "OK");
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
 
  //Update function


getAllFichiers() {
  const files = this.fileService.getFile()   //I change a dataservice by fileservice
  const metadata = this.dataApi.getFileMetadata() //I use this line to use a metadata
  console.log("All files:", files, metadata)        
  return files
  return metadata                         // I add this return


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
