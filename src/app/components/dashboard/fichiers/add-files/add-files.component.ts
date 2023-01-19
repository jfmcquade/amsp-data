import { Component, OnInit, Inject, Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss']
})
export class AddFilesComponent implements OnInit {

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
    private dialogRef : MatDialogRef<AddFilesComponent>
  ) { 
    this.title = data.title;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      uuid : ['', []],
      nom_fichier : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      annee : ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
      projet : ['', [Validators.required]],
      observation : ['', [Validators.required, Validators.maxLength(500)]],
      responsable_fichier : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      serveur : ['', [Validators.required]], 
    })
  }

  cancelRegistration() {
  this.dialogRef.close();
  }

  registerFiles() {
  this.dialogRef.close(this.form.value);    
  }

}
