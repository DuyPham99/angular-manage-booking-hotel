import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';
import { UserManagerTableComponent } from './user-manage-table/user-manage-table.component';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [
    AppComponent,
    NavSideBarComponent,
    UserManagerTableComponent,
    BookingCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FullCalendarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
