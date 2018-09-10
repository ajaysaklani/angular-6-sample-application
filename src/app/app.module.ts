import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './routes.module';
import { GridModule } from '@progress/kendo-angular-grid';

//Angular Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


import { ReceiptListComponent } from './warehouse/receipt-list/receipt-list.component';
import { PackageListComponent } from './warehouse/package-list/package-list.component';
import { ReceiptFormComponent } from './warehouse/receipt-form/receipt-form.component';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ReportListComponent } from './report-list/report-list.component';
import { UsersListComponent } from './AccountManagement/users-list/users-list.component';
import { UserFormComponent } from './AccountManagement/user-form/user-form.component';
import { SecurityListComponent } from './AccountManagement/security-list/security-list.component';
import { SecurityFormComponent } from './AccountManagement/security-form/security-form.component';

import { AuthenticationModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ReceiptListComponent,
    PackageListComponent,
    ReceiptFormComponent,
    ShipmentListComponent,
    TaskListComponent,
    ReportListComponent,
    UsersListComponent,
    SecurityListComponent,
    SecurityFormComponent,
    UserFormComponent
  ],
  imports: [
    AuthenticationModule,

    BrowserModule,
    HttpClientModule,
    GridModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
