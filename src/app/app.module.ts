import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

// Material Design
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

// Firebase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseConfig, FirebaseAuthConfig } from './config/firebase.config';

// Routing Modules
import { AppRoutingModule } from './app.routing.module';
import { MenuRoutingModule } from './menu/menu.routing.module';

// Custom Components
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    // Routing
    AppRoutingModule,  
    MenuRoutingModule,    

    // Angular Material
    MaterialModule, 
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
