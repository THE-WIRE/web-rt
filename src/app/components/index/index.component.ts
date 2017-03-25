import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: '<index-component></index-component>',
  templateUrl: './index.component.html'
})

export class IndexComponentClass {
<<<<<<< HEAD

=======
  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    
  }
  CreateTeamRedirect() {
   this.router.navigate(['create'])
  }

  JoinTeam(){
    this.router.navigate(['join'])
  }
>>>>>>> 1aec9211fd59aa72ecc3a3d12b8ff7d23464a558
}

