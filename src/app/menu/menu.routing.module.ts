import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { MissionComponent } from './../mission/mission.component';
// import { DashboardComponent } from './../dashboard/dashboard.component';
// import { AdvisorComponent } from './../advisor/advisor.component';


const routes: Routes = [

	// { path: 'mission', component: MissionComponent },
	// { path: 'dashboard', component: DashboardComponent },
	// { path: 'advisor', component: AdvisorComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class MenuRoutingModule {}