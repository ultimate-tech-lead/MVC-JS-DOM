import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';

import { AppRoutingModule } from './app-routes.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [AppComponent, AboutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
