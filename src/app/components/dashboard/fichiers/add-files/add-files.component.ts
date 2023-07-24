import { Component, OnInit, Inject, Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FileMetadata } from 'src/app/services/shared/model/fichiers';
import { DataService } from 'src/app/services/shared/service/data/data.service';
import { FileService } from 'src/app/services/shared/service/file/file.service';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss']
})
export class AddFilesComponent implements OnInit {
  editing = false

  actionBtn: string = "Enregistrer";
  form !: FormGroup;
  title !: string;
  nom_fichier !: string;
  annee !: string;
  projet !: string;
  observation !: string;
  responsable_fichier !: string;
  email !: string;
  serveur !: string;
  serveurs: string[] = ['Google Drive', 'Storage Bucket'];
  file: File | undefined;
  id !: string;

  uploadProgress$: Observable<number | undefined> | undefined;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dataApi: DataService,
    private fileService: FileService,
    private dialogRef: MatDialogRef<AddFilesComponent>,
  ) {
    this.title = data.title;
    this.id = data.id;
    this.serveur = data.serveur;
    this.nom_fichier = data.nom_fichier;
    this.annee = data.annee;
    this.projet = data.projet;
    this.responsable_fichier = data.responsable_fichier;
    this.email = data.email;   
    this.file = data.file; 
    this.actionBtn = data.actionBtn;
    this.editing = data.editing
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id : [this.id, []],
      serveur: [this.serveur, [Validators.required]],
      nom_fichier: [this.nom_fichier, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      annee: [this.annee, [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
      projet: [this.projet, [Validators.required]],
      responsable_fichier: [this.responsable_fichier, [Validators.required]],
      email: [this.email, [Validators.required, Validators.email]],
      observation: [this.observation, [Validators.required, Validators.maxLength(500)]],
    });
    if (this.editData) {
      this.actionBtn = "Mettre a jour";
      this.form.controls['serveur'].setValue(this.editData.serveur);
      this.form.controls['nom_fichier'].setValue(this.editData.nom_fichier);
      this.form.controls['annee'].setValue(this.editData.annee);
      this.form.controls['projet'].setValue(this.editData.projet);
      this.form.controls['responsable_fichier'].setValue(this.editData.responsable_fichier);
      this.form.controls['email'].setValue(this.editData.email);
      this.form.controls['observation'].setValue(this.editData.observation);
    }
  }

  async addFiles() {
    if (this.form.valid) {
      if (this.file) {

        // Upload the metadata to Firestore (eventually to Google Cloud SQL) via the metadata service
        const fileId = await this.dataApi.addFileMetadata(this.form.value as FileMetadata)

        // Upload the file to Firebase Storage via the file service, at a path matching the file's metadata id
        const filepath = fileId
        await this.fileService.uploadFile(this.file, filepath)


        this.form.reset();
        this.dialogRef.close('Enregistrer');
      } else {
        console.log("file not found");
        console.log(this.id);
        this.dataApi.updateFile(this.id, this.form.value as FileMetadata)
      }
    }
  }

  cancelRegistration() {
    this.dialogRef.close();
  }

  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files
    if (files) {
      return this.file = files[0]
    }
    return console.log("No file")
  }

  async createMetadata(fileUuid: string) {
    // TODO: prompt user to complete additional fields of metadata
    return { fileUuid }
  }

}
