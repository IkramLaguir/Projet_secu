import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component'

  
const routes: Routes = [
  {path : 'signup', component : SignupComponent},
  {path : 'login', component : LoginComponent},
  {path : 'profile', component : ProfileComponent},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }