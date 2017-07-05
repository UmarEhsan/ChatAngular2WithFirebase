import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { environment } from '../environments/environment';
import {AF} from './providers/af';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersService } from './users/users.service';
import { MessageServiceService } from './messages/message-service.service';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    UsersComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes)
  ],
  providers: [AF,
  AngularFireModule,
  AngularFireAuth,
  AngularFireDatabase,
  UsersService,
  MessageServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
