import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomimageComponent } from './welcomimage/welcomimage.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutplannerComponent } from './routplanner/routplanner.component';
import { OrganaizationComponent } from './organaization/organaization.component';
import { FindComponent } from './find/find.component';
// import { PlaceAutocompleteComponent } from './components/place-autocomplete/place-autocomplete.component';
// import { Place1AutocompleteComponent } from './components/place1-autocomplete/place1-autocomplete.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { StoriesComponent } from './stories/stories.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { MunnarComponent } from './munnar/munnar.component';
import { KodaiknalComponent } from './kodaiknal/kodaiknal.component';
import { OotyComponent } from './ooty/ooty.component';
import { CyclingclubComponent } from './cyclingclub/cyclingclub.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';
import { TouroperotarComponent } from './touroperotar/touroperotar.component';
import { EventsComponent } from './events/events.component';
import { EventloginComponent } from './eventlogin/eventlogin.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    MainComponent,
    WelcomimageComponent,
    FooterComponent,
    RoutplannerComponent,
    OrganaizationComponent,
    FindComponent,
    // PlaceAutocompleteComponent,
    // Place1AutocompleteComponent,
    FileUploadComponent,
    StoriesComponent,
    TripDetailsComponent,
    MunnarComponent,
    KodaiknalComponent,
    OotyComponent,
    CyclingclubComponent,
    ClubDetailComponent,
    TouroperotarComponent,
    EventsComponent,
    EventloginComponent,
    MapComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
