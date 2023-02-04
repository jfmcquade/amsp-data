import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
//import {MatDatepickerModule} from '@angular/material/datepicker';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [MatCardModule,
            LayoutModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatDialogModule,
            MatGridListModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatSnackBarModule,
            MatTableModule,
            MatPaginatorModule,
            MatMenuModule

          ],
  exports: [MatCardModule,
            LayoutModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatDialogModule,
            MatGridListModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatSnackBarModule,
            MatTableModule,
            MatPaginatorModule,
            MatMenuModule

          ]
})
export class MaterialModule { }
