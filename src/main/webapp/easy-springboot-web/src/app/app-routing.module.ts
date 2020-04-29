import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {Code404Component} from './code404/code404.component';


const routes: Routes = [
  {
    path: '', // 默认路由
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {
    path: 'sidenav', component: SideNavComponent,
    // canActivate: [CanActivateAuthGuard],
    children: [
      {path: 'personalinfo', component: PersonalInfoComponent,},
    ],

  },
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
