import { Component, OnInit, Inject, Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/shared/service/data.service';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss']
})
export class AddFilesComponent implements OnInit {

  actionBtn : string = "Enregistrer";
  form !: FormGroup;
  title !: string;
  nom_fichier !: string;
  annee !: string;
  projet !: string;
  observation !: string;
  responsable_fichier !: string;
  email !: string;
  serveurs : string[] = ['Google Drive', 'Storage Bucket'];
   
  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dataApi : DataService,
    private dialogRef : MatDialogRef<AddFilesComponent>,
  ) { 
    this.title = data.title;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      //uuid : ['', []],
      serveur : ['', [Validators.required]], 
      nom_fichier : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      annee : ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
      projet : ['', [Validators.required]],
      responsable_fichier : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      observation : ['', [Validators.required, Validators.maxLength(500)]],
    });
    if(this.editData){
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
  
 /*addFiles(){
  if (this.form.valid){
    this.dataApi.postFiles(this.form.value)
    .subscribe({
      next:(res)=>{
        alert("Fichier ajouté avec succès");
        this.form.reset();
        this.dialogRef.close('Enregistrer');
      },
      error:()=>{
        alert("Erreur d'ajout de fichier")
      }
    })
  }
 }*/

  cancelRegistration() {
  this.dialogRef.close();
  }

  registerFiles() {
  this.dialogRef.close(this.form.value);    
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
    // e.g.const metadata = this.createMetadata(file)
    // e.g. dataService.addFile(file)
    // e.g. dataService.addMetadata(metadata)

  };

  async createMetadata(fileUuid: string) {
    // TODO: prompt user to complete additional fields of metadata
    return { fileUuid }
  }

}
