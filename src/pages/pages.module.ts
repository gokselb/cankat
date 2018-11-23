import { NgModule } from "@angular/core";
import { Route, RouterModule, Router } from "@angular/router";

import { DeyepCoreModule } from "./../deyep.core/deyep.core.module";
import { HomeComponent } from "./home/home.component";
import { BrowserModule } from "@angular/platform-browser";

export const route : Route = {
  path:"",
  component: HomeComponent
}

@NgModule({
  imports:[
    BrowserModule,
    RouterModule.forChild([route]),
    DeyepCoreModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class PagesModule {

}