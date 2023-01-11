import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { ErrorComponent } from './error/error.component';
import { AnnoncecreateComponent } from './annonces/annoncecreate/annoncecreate.component';

const routes: Routes = [
  {path:"",component : LoginComponent},
  {path:"login",component : LoginComponent},
  {path:"annonces",component : AnnoncesComponent},
  {path:"annonce/create",component : AnnoncecreateComponent},
  {path:"**",component:ErrorComponent }
  // {path:"**",component : AnnoncesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
