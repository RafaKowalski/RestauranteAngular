import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HamburguersComponent } from './hamburguers/hamburguers.component';

const routes: Routes = [
  {
    path: 'hamburguers',
    component: HamburguersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
