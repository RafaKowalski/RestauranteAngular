import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HamburguersComponent } from './hamburguers/hamburguers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'hamburguers',
    component: HamburguersComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
