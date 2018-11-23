import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./layouts/main.layout/main.layout.component";
import { DeyepRootComponent } from "./deyep-root.component";
import { NavigationService } from "./navigation/navigation.service";


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DeyepRootComponent,
    MainLayoutComponent
  ],
  exports: [
    DeyepRootComponent,
    MainLayoutComponent
  ]
})
export class DeyepCoreModule {

  public static forRoot() {
    return { ngModule: DeyepCoreModule,
    providers: [
      NavigationService
    ] }
  }
}