import { NgModule } from "@angular/core";
import { DeyepRootComponent } from "./deyep-root.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DeyepRootComponent
  ],
  exports: [
    DeyepRootComponent
  ]
})
export class DeyepCoreModule {

  public static forRoot() {
    return { ngModule: DeyepCoreModule }
  }
}