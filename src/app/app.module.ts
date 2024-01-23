import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetProductComponent } from './get-product/get-product.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { SuccessfulComponent } from './successful/successful.component';
import {RouterModule} from '@angular/router';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    GetProductComponent,
  
    SuccessfulComponent,
    AdminproductComponent,
    HomeComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'successful',component:SuccessfulComponent},
      {path:'getproduct',component:GetProductComponent},
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'adminproduct', component:AdminproductComponent},
      {path:'home',component:HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
