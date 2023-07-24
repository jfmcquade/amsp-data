import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFilesComponent } from './add-files/add-files.component';
import { ReadXlsxFileComponent } from '../../read-xlsx-file/read-xlsx-file.component';
import { UploadFileComponent } from '../../upload-file/upload-file.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/shared/service/data/data.service';
import { FileService } from 'src/app/services/shared/service/file/file.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { DeleteFilesComponent } from './delete-files/delete-files.component';
import { ListResult } from '@angular/fire/compat/storage/interfaces';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { FileMetadata } from 'src/app/services/shared/model/fichiers';

@Component({
  selector: 'app-fichiers',
  templateUrl: './fichiers.component.html',
  styleUrls: ['./fichiers.component.scss']
})
export class FichiersComponent implements OnInit {

  //fichierForm !: FormGroup;
  //serveurs : string[] = ['Google Drive', 'Storage Bucket'];
  displayedColumns: string[] = ["nom_fichier", "annee", "projet", "observation", "responsable_fichier", "email", "action"];
  dataSource = new MatTableDataSource<FileMetadata>();

  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  allFiles$: any;
  allFiles: any;
  row: any;

  constructor(
    public dialog: MatDialog,
    private dataApi: DataService,
    private fileService: FileService,
    private _snackBar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
    //private formBuilder : FormBuilder,


  ) { }

  async ngOnInit() {
    this.getAllMetadata().subscribe(async (allFilesMetadata: FileMetadata[]) => {
      console.log("allFilesMetadata:", allFilesMetadata)
      for (let fileMetadata of allFilesMetadata) {
        const downloadUrl$ = await this.fileService.getUrlForFile(fileMetadata.id)
        downloadUrl$.subscribe((url) => {
          fileMetadata.downloadUrl = url
        })
        console.log("fileMetadata", fileMetadata)
      }
      this.dataSource.data = allFilesMetadata
      this.table.renderRows()
    })


    // this.getAllFichiers()
    // this.allFiles$.subscribe((result: any) => {
    //   console.log("result:", result)
    //   this.dataSource.data = result.items
    //   if (result.prefixes) {
    //     result.prefixes.forEach(async (path: any) => {
    //       const result = await firstValueFrom(this.fileService.listAllFilesInSubpath(path.fullPath));
    //       await (result.items as any).map(async (item: any) => {
    //         item.downloadUrl = await item.getDownloadURL()
    //         this.dataSource.data.push(item)
    //         console.log("this.dataSource.data:", this.dataSource.data)
    //         this.table.renderRows()
    //       })
    //     })
    //   }
    // })
  }

  addFiles() {
    //alert('Vous etes entrain d\'ajouter un fichier')
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Telecharger un fichier'
    }
    const dialogRef = this.dialog.open(AddFilesComponent, dialogConfig);
    //ReadXlsxFileComponent, UploadFileComponent,
    dialogRef.afterClosed().subscribe(data => {
      if (!this.editFichiers) {
        if (data) {
          //console.log("Enregistrer le fichier :", data);
          // this.dataApi.addFiles(data);
        }
      }
    })
  }

  viewFiles(row: any) {
    window.open(row.downloadUrl, '_blank');
  }

  async deleteFiles(row: any) {
    //alert('Vous etes entrain d\'ajouter un fichier')
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.data = row;
    dialogConfig.data = {
      title: 'Supprimé avec succès',

    }
    const dialogRef = this.dialog.open(DeleteFilesComponent, dialogConfig);
    //ReadXlsxFileComponent, UploadFileComponent,
    dialogRef.afterClosed().subscribe(async data => {
      if (data) {
        // Delete metadata from database
        await this.dataApi.deleteFiles(row.id);

        // Delete file from storage
        await this.fileService.deleteFile(row.id)

        this.openSnackBar("Suppression effectuée", "Ok");
      }
    })
  }

  editFiles(row: any) {
    if (row.id == null || row.nom_fichier == null) {
      return;
    }
                                                          //function to edit files
    //alert('Vous etes entrain d\'ajouter un fichier')
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;
    dialogConfig.data.title = "Editer le fichier";
    dialogConfig.data.actionBtn = "update";

    const dialogRef = this.dialog.open(AddFilesComponent, dialogConfig);
    //ReadXlsxFileComponent, UploadFileComponent,
    dialogRef.afterClosed().subscribe(data => {
      if (!this.editFichiers) {
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

  editFichiers(row: any) {
    console.log(row);
    this.dialog.open(AddFilesComponent, {
      data: row
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

  }

  //Update function


  getAllFichiers() {
    this.allFiles$ = this.fileService.listAllFiles()

    // const metadata = this.dataApi.getFileMetadata() //I use this line to use a metadata

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

  getAllMetadata(): Observable<FileMetadata[]> {
    return this.dataApi.getAllFileMetadata()
  }
}
