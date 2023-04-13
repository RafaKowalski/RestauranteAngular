import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HamburguersComponent } from './hamburguers/hamburguers.component';
import { HomeComponent } from './home/home.component';
import { CarnesComponent } from './carnes/carnes.component';
import { MassasComponent } from './massas/massas.component';
import { SaladasComponent } from './saladas/saladas.component';
import { BebidasComponent } from './bebidas/bebidas.component';

const routes: Routes = [
  {
    path: 'hamburguers',
    component: HamburguersComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'carnes',
    component: CarnesComponent
  },
  {
    path: 'massas',
    component: MassasComponent
  },
  {
    path: 'saladas',
    component: SaladasComponent
  },
  {
    path: 'bebidas',
    component: BebidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
