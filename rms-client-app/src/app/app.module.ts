import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { AddRateComponent } from './add-rate/add-rate.component';
import { DisplayRateComponent } from './display-rate/display-rate.component';
import { RateDetailsComponent } from './rate-details/rate-details.component';
import { UpdateRateComponent } from './update-rate/update-rate.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AddRateComponent, DisplayRateComponent, RateDetailsComponent, UpdateRateComponent, HomeComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, AuthRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
