import { Injectable} from '@angular/core'
import { Router } from '@angular/router';


// Local
@Injectable()
export class NavigationService {

  constructor(
    private router: Router
  ) {  }


  // Public Methods
  public navigateTo(path: string) {
    this.router.navigate([path]);
  }

}