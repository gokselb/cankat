import { Component } from "@angular/core";
import { NavigationService } from "./../../../deyep.core/navigation/navigation.service";

@Component({
  selector: "layout-main",
  templateUrl: "main.layout.component.html"
})

export class MainLayoutComponent {
  public constructor(private navigationService: NavigationService) { }

  public navigateTo(path:string){
    this.navigationService.navigateTo(path);
  }
}

