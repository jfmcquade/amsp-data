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
