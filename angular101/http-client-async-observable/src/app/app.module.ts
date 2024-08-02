import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routes.module';
import { AboutService } from './pages/about/about.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ], // Add HttpClientModule here
  declarations: [AppComponent, AboutComponent],
  bootstrap: [AppComponent],
  providers: [AboutService],
})
export class AppModule {}