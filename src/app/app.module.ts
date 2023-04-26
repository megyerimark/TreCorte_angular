import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import {  HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './Admin/login/login.component';
import { RegisterComponent } from './Admin/register/register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './Admin/category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminNAVComponent } from './Admin/admin-nav/admin-nav.component';
import { MenusComponent } from './Admin/menus/menus.component';
import { ReservationComponent } from './Admin/reservation/reservation.component';
import { AdminresdataComponent } from './Admin/reservation/adminresdata/adminresdata.component';
import { MenuindexComponent } from './home/menuindex/menuindex.component';
import { CatpipePipe } from './Admin/categorie/catpipe.pipe';
import { MenupipePipe } from './Admin/menus/menupipe.pipe';
import { RespipePipe } from './Admin/reservation/adminresdata/respipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CategoryComponent,
    NavbarComponent,
    AdminNAVComponent,
    MenusComponent,
    ReservationComponent,
    AdminresdataComponent,
    MenuindexComponent,
    CatpipePipe,
    MenupipePipe,
    RespipePipe,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
