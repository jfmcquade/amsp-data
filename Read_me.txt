//le code qui m'as aide URL: https://www.youtube.com/watch?v=UKVVJtBUArs&list=PL1UHgDbN7Tm7k58pRITizSQIzsgEO3Ubr&index=1
git clone https://github.com/jfmcquade/amsp-data.git
cd amsp-data
npm install
ng add @angular/material // installation de l'angular material
npm install firebase @angular/fire --save
ng g m material/material
ng g c components/dashboard/videos
ng g c components/dashboard/images
ng g c components/dashboard/fichiers
ng generate @angular/material:navigation components/dashboard/sidebar
ng g c components/dashboard/fichiers/addFiles
ng g i shared/model/fichiers 
ng g s shared/service/data
https://fonts.google.com/icons?icon.query=storage // lien pour telecharger les icons
https://getbootstrap.com/docs/5.3/getting-started/introduction/ // lien bootstrap pour la barre de navigation

i add [disabled]="form.invalid" button is not focussable app/components/dashboard/fichiers/add-files/add-files.component.html

git config --global user.email "you@example.com"
git config --global user.name "Your Name"

firebase emulators:start //demarrer l'emulateur
firebase init emulators // initialiser l'emulateur


https://stackoverflow.com/questions/66666406/java-java-execute-workspacecommand-failed-in-vscode //corriger l'erreur : "Error: Could not spawn `java -version`. Please make sure Java is installed and on your system PATH."

//envoie des fichiers sur git
git pull
git add .
git commit -m "migrated angularfire to use compat version; update README; set up firebase emulators"
git push






        <mat-dialog-content [formGroup]="fichierForm"> 

            <mat-grid-list cols="2">
                <mat-grid-tile>
                        <div>
                            <!--emplacement de stockage--> 
                            <mat-form-field appearance="outline">
                                <mat-label>Selection du serveur</mat-label>
                                <mat-select formControlName="serveur" name="serveur">
                                  <mat-option *ngFor="let serveur of serveurs" [value]="serveur">{{serveur}}</mat-option>
                                </mat-select>
                            </mat-form-field>
                            <!-- Libelle du fichier -->
                            <mat-form-field appearance="outline">
                                <mat-label>Libelle du fichier</mat-label>
                                <input matInput placeholder="Ex. Donnees_test_projet1" formControlName="nom_fichier" required>
                                <mat-error *ngIf="fichierForm.get('nom_fichier')?.invalid || fichierForm.get('nom_fichier')?.dirty || fichierForm.get('nom_fichier')?.touched">Entrez un libelle valide </mat-error>
                                <mat-icon matSuffix>drive_file_rename_outline</mat-icon>
                                
                            </mat-form-field>
        
                            <!-- Annee-->
                            <mat-form-field appearance="outline">
                                <mat-label>Annee </mat-label>
                                <input matInput placeholder="Ex. 2020" matInput type="number" formControlName="annee" required>
                                <mat-error *ngIf="fichierForm.get('annee')?.invalid || fichierForm.get('annee')?.dirty ||fichierForm.get('annee')?.touched"> Veuillez entrer une annee valide </mat-error>
                                <mat-icon matSuffix>calendar_month</mat-icon>
                                
                            </mat-form-field>
                            <!--<mat-form-field appearance="outline">
                                <mat-label>Choisir la date</mat-label>
                                <input matInput [matDatepicker]="dp" [formControl]="annee">
                                <mat-hint>MM/YYYY</mat-hint>
                                <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
                                <mat-datepicker #dp
                                                startView="multi-year"
                                                (monthSelected)="setMonthAndYear($event, dp)"
                                                panelClass="example-month-picker">
                                </mat-datepicker>
                            </mat-form-field>-->
        
                            <!-- Projet correspondant au fichier-->
                            <mat-form-field appearance="outline">
                                <mat-label> Projet </mat-label>
                                <input matInput placeholder="Ex. Savoirs Paysans" formControlName="projet" required>
                                <mat-error *ngIf="fichierForm.get('projet')?.invalid || fichierForm.get('projet')?.dirty || fichierForm.get('projet')?.touched">Entrez un projet valide </mat-error>
                                <mat-icon matSuffix>diversity_3</mat-icon>
                                
                            </mat-form-field>
                                                        
                        </div>
                </mat-grid-tile>
        
                <mat-grid-tile>
                    <div>                 
                        <!-- responsable du fichier-->
                        <mat-form-field appearance="outline">
                            <mat-label>Nom & prenom du resp. fichier </mat-label>
                            <input matInput placeholder="Ex. KABORE B Roger" formControlName="responsable_fichier" required>
                            <mat-error *ngIf="fichierForm.get('responsable_fichier')?.invalid || fichierForm.get('responsable_fichier')?.dirty || fichierForm.get('responsable_fichier')?.touched">Veuillez saisir des valeurs correctes </mat-error>
                            <mat-icon matSuffix>person</mat-icon>
                            
                        </mat-form-field>  
        
                        <!--email de celui qui a uploade le fichier-->
                        <mat-form-field appearance="outline">
                            <mat-label>Votre email</mat-label>
                            <input matInput placeholder="Ex. test@gmail.com" formControlName="email" required>
                            <mat-error *ngIf="fichierForm.get('email')?.invalid || fichierForm.get('email')?.dirty || fichierForm.get('email')?.touched">Veuillez entrer une adresse email valide </mat-error>
                            <mat-icon matSuffix>contact_mail</mat-icon>
                            
                        </mat-form-field> 
                        
                        <!-- uploader le fichier-->
                        <!--<input title="Upload File" type="file" class="file-upload" (change)="onFileSelected($event)" />
        
                        <!-- Observations -->
                    <mat-form-field appearance="outline">
                        <mat-label>Description</mat-label>
                        <textarea  matInput #message maxlength="500" cols="15" rows="2" laceholder="Ex. I need help with..."></textarea>
                        <mat-icon matSuffix>abc</mat-icon>
                        <mat-hint align="start"><strong> Pas d'infos personnelles</strong> </mat-hint>
                        <mat-hint align="end">{{message.value.length}} / 500</mat-hint>
                    </mat-form-field>
                        
                    </div>
                </mat-grid-tile>
            </mat-grid-list>
        </mat-dialog-content>