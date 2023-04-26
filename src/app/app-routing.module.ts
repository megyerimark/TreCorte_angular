import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Admin/register/register.component';
import { LoginComponent } from './Admin/login/login.component';

import { GuardGuard } from './Admin/guard.guard';
import { CategoryComponent } from './Admin/category/category.component';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './Admin/menus/menus.component';
import { ReservationComponent } from './Admin/reservation/reservation.component';
import { AdminresdataComponent } from './Admin/reservation/adminresdata/adminresdata.component';
import { MenuindexComponent } from './home/menuindex/menuindex.component';


const routes: Routes = [
  {path:"admin/register", component:RegisterComponent},
  {path:"admin/login", component:LoginComponent},
  {path:"", component:HomeComponent},




 {path:"foglalas", component:ReservationComponent},
  {path:"menuk", component:MenuindexComponent},
  {path:"foglalas_adatok", component:AdminresdataComponent, canActivate:[GuardGuard]},

  {path:"admin/menus", component:MenusComponent, canActivate:[GuardGuard]},
  {path:"admin/category", component:CategoryComponent , canActivate:[GuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
