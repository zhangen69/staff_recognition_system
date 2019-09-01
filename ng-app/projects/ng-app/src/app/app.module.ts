import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageModule } from '@ngx-pwa/local-storage';

import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { StaffModule } from './staff/staff.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StorageModule.forRoot({ IDBNoWrap: true }),
    AppRoutingModule,
    SharedModule,
    AdminModule,
    StaffModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
