import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () =>
    //   import('./modules/customer/customer.module').then((m) => m.CustomerModule),
    redirectTo: 'customer',
    pathMatch: 'full',
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./modules/customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: '**',
    redirectTo: 'customer',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
