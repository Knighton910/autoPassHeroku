import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {LeaseComponent} from './lease/lease.component';
import {CarThumbnailComponent } from './cars/car.thumbnail.component';
import {CarDetailsComponent} from './cars/car-details/car-details.component';
import {CoverpageComponent} from './coverpage/coverpage.component';
import {CarService} from './car.service';

@NgModule({
  declarations: [
    AppComponent,
    CoverpageComponent,
    CarsComponent,
    LeaseComponent,
    CarThumbnailComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'cars', pathMatch: 'full'},
      {path: 'cover', component: CoverpageComponent},
      {path: 'cars', component: CarsComponent},
      {path: 'lease', component: LeaseComponent},
      {path: 'cars/:id', component: CarDetailsComponent}
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
