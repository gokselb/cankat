import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { DeyepCoreModule } from './../deyep.core/deyep.core.module';
import { PagesModule } from './../pages/pages.module';
@NgModule({
   imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([]),
    DeyepCoreModule.forRoot(),
    PagesModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  declarations: [
    AppComponent
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  