import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: '<index-component></index-component>',
  templateUrl: './index.component.html'
})
export class IndexComponentClass {
  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    
  }
  CreateTeamRedirect() {
   this.router.navigate(['create'])
  }

  JoinTeam(){
    this.router.navigate(['navigate'])
  }
}
