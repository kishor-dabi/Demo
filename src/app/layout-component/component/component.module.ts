import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from './main-component.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComponentRoutingModule } from './component-route.module';
import { PartialsModule } from '../partials/partials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponentComponent,
    DefaultComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    PartialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentModule { }
