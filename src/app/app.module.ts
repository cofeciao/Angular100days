import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import {AuthorDetailsComponent} from './authors/author-detail.component';
import {AuthorListsComponent} from './authors/author-list.component';
import {FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {ToggleComponent} from './toggle/toggle.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { PersonComponent } from './person/person.component';
import {ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';
import {IpComponent} from './ip.component';
import { WeatherComponent } from './weather/weather.component';
import {SignInComponent} from './sign-in.component';
import { ShopeeComponent } from './shopee/shopee.component';
import {AppRoutingModule} from './app-routing.module';
import {IpService} from './ip.service';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    AuthorDetailsComponent,
    AuthorListsComponent,
    ToggleComponent,
    ListPersonComponent,
    PersonComponent,
    ParentComponent,
    ChildComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    WeatherComponent,
    SignInComponent,
    ShopeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
