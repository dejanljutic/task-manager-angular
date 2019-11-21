import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    ErrorPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
