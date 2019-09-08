import { MaterialModule } from './../material.module';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './auth/profile/profile.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from './templates/confirmation-dialog/confirmation-dialog.component';
import { DialogFormComponent } from './templates/dialog-form/dialog-form.component';
import { PageLoaderComponent } from './templates/page-loader/page-loader.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StandardListComponent } from './standard/standard-list/standard-list.component';
import { StandardFormComponent } from './standard/standard-form/standard-form.component';
import { StandardFormFieldComponent } from './standard/standard-form-field/standard-form-field.component';
import { StandardFilterComponent } from './standard/standard-filter/standard-filter.component';
import { TitleDisplayPipe } from './pipes/title-display.pipe';
import { FileUploadModule } from 'ng2-file-upload';
import { ToastrModule } from 'ngx-toastr';
import { UserChangePasswordComponent } from './auth/change-password/user-change-password.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterOptionsPipe } from './standard/filter-options.pipe';
import { GetTotalPipe } from './pipes/get-total.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UserChangePasswordComponent,
    ConfirmationDialogComponent,
    DialogFormComponent,
    PageLoaderComponent,
    PageNotFoundComponent,
    StandardListComponent,
    StandardFormComponent,
    StandardFormFieldComponent,
    StandardFilterComponent,
    FilterOptionsPipe,
    TitleDisplayPipe,
    GetTotalPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FileUploadModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    TitleDisplayPipe,
  ],
  entryComponents: [ConfirmationDialogComponent, DialogFormComponent],
  exports: [
    LoginComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UserChangePasswordComponent,
    ConfirmationDialogComponent,
    DialogFormComponent,
    PageLoaderComponent,
    PageNotFoundComponent,
    StandardListComponent,
    StandardFormComponent,
    StandardFormFieldComponent,
    StandardFilterComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FileUploadModule,
    ToastrModule,
    FilterOptionsPipe,
    TitleDisplayPipe,
    GetTotalPipe,
  ],
})
export class SharedModule { }
