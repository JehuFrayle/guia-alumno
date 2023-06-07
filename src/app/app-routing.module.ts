import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { loggedGuard } from './guards/logged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Bienvenido', component: HomeComponent },
  { path: 'login', title: 'Ingresar', component: LoginComponent },
  { path: 'acerca-de', title: 'Acerca de', component: AboutComponent },
  { path: 'schedule', title: 'Horario', canActivate: [loggedGuard], component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
