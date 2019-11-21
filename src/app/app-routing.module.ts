import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
