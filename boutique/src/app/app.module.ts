import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GroomingComponent } from './grooming/grooming.component';
import { SignService } from './services/sign.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    GroomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
