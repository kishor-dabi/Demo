import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';
import { AuthGuard } from '../../service/auth.guard';


const routes: Routes = [
    {
        path: '',
        component: MainComponentComponent,
        children:[
            {
                path: '',
                component: DefaultComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'home',
                component: HomeComponent, canActivate : [AuthGuard]
            }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
