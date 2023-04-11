import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Admin/register/register.component';
import { LoginComponent } from './Admin/login/login.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { GuardGuard } from './Admin/guard.guard';
import { CategoryComponent } from './Admin/category/category.component';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './Admin/menus/menus.component';

const routes: Routes = [
  {path:"admin/register", component:RegisterComponent},
  {path:"admin/login", component:LoginComponent},
  {path:"", component:HomeComponent},
  {path:"admin/menus", component:MenusComponent, canActivate:[GuardGuard]},
  {path:"admin/admin", component:AdminComponent , canActivate:[GuardGuard]},
  {path:"admin/category", component:CategoryComponent , canActivate:[GuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
