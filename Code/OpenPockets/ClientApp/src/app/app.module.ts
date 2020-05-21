import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { AddPersonComponent } from './people/add-person/add-person.component';
import { EditPersonComponent } from './people/edit-person/edit-person.component';
import { ListPeopleComponent } from './people/list-people/list-people.component';
import { PeopleService } from './shared/services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    AddPersonComponent,
    EditPersonComponent,
    ListPeopleComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'add-person', component: AddPersonComponent },
      { path: 'edit-person', component: EditPersonComponent },
      { path: 'list-people', component: ListPeopleComponent },
    ])
  ],
  providers: [
    PeopleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
