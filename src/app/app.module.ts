import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from "@angular/router";

import { AppComponent } from './app.component';
import { DeyepCoreModule } from './../deyep.core/deyep.core.module';
import { PagesModule } from './../pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    DeyepCoreModule.forRoot(),
    PagesModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  