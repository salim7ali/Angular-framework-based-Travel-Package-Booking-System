import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpModule } from '@angular/http';
// import { CommonService } from './common.service';
// import { MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DragableColumnDirective } from './Dragable-column-directive/dragable-column.directive';

import { AppRoutingModule } from './app-routing.module';
// import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';
// import { UserComponent } from './user/user.component';
// import { SignInComponent } from './user/sign-in/sign-in.component';
import { AppComponent } from './app.component';
import { PassengerinfoComponent } from './passengerinfo/passengerinfo.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ToursComponent } from './tours/tours.component';
// import { SignUpComponent } from './user/sign-up/sign-up.component';
// import { appRoutes } from './routes';
// import { AuthGuard } from './auth/auth.guard';
// import { AuthInterceptor } from './auth/auth.interceptor';

  
import {CommonService} from './common.service';  

@NgModule({
  declarations: [
    AppComponent,
    // SignUpComponent,
    // UserComponent,
    // SignInComponent,
    PassengerinfoComponent,
    BookingsComponent,
    ContactComponent,
    AboutComponent,
    LogoutComponent,
    NavComponent,
    HomeComponent,
    DragableColumnDirective,
    FooterComponent,
    ToursComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientModule,
    // ToastrModule.forRoot(),
    // BrowserAnimationsModule,
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule ,
    HttpModule,
    // MatFormField
  ],
  providers: [CommonService /*UserService,AuthGuard,
    ,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }*/],
  bootstrap: [AppComponent, BookingsComponent]
})
export class AppModule { }
