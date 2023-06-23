import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FindComponent } from './find/find.component';
import { StoriesComponent } from './stories/stories.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RoutplannerComponent } from './routplanner/routplanner.component';
import { OrganaizationComponent } from './organaization/organaization.component';
import { CyclingclubComponent } from './cyclingclub/cyclingclub.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';
import { TouroperotarComponent } from './touroperotar/touroperotar.component';
import { EventsComponent } from './events/events.component';
import { EventloginComponent } from './eventlogin/eventlogin.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'su',component: SingupComponent},
  {path:'lg',component: LoginComponent},
  {path:'Main',component:  MainComponent},
  {path:'footer',component:  FooterComponent},
  {path:'find',component:   FindComponent },
  {path:'st',component:   StoriesComponent },
  {path:'flu',component:   FileUploadComponent  },
  {path:'tdv',component:   TripDetailsComponent  },
  {path:'rout',component:    RoutplannerComponent   },
  {path:'org',component:     OrganaizationComponent   },
  {path:'club',component:     CyclingclubComponent  },
  {path:'jclub',component:     ClubDetailComponent  },
  {path:'trop',component:     TouroperotarComponent  },
  {path:'event',component:    EventsComponent },
  {path:'eadd',component:    EventloginComponent  },
  {path:'map',component:    MapComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
