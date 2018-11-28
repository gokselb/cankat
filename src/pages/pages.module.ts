import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { DeyepCoreModule } from "./../deyep.core/deyep.core.module";
import { HomeComponent } from "./home/home.component";
import { MainLayoutComponent } from "./../deyep.core/public_api";
import { AddNewComponent } from "./addnew/addnew.component";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


export const routes : Route[] = [{
  path:"",
  component: MainLayoutComponent,
  children:[{
    path: "",
    component: HomeComponent
  }]
},
{
  path:"addnew",
  component: MainLayoutComponent,
  children:[{
    path: "",
    component: AddNewComponent
  }]
}]

@NgModule({
  imports:[
    BrowserModule,
    RouterModule.forChild(routes),
    FormsModule, 
    DeyepCoreModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    AddNewComponent
  ]
})
export class PagesModule {

}