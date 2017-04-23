import { Component } from '@angular/core';

// Routing
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  	constructor(
  
	    // private router : Router

  	){}

	switchToDashboard(){

    	// this.router.navigate(['dashboard']);

  	}

    switchToMission(){

      // this.router.navigate(['mission']);

    }

    switchToAdvisor(){

      // this.router.navigate(['advisor']);

    }

  
}
