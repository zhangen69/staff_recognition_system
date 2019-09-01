import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './auth/profile/profile.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from './templates/confirmation-dialog/confirmation-dialog.component';
import { DialogFormComponent } from './templates/dialog-form/dialog-form.component';
import { PageLoaderComponent } from './templates/page-loader/page-loader.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent,
    // ProfileComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ConfirmationDialogComponent,
    DialogFormComponent,
    PageLoaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RouterModule,
    CommonModule,
  ]
})
export class SharedModule { }
