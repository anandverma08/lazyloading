import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {
   path : '', component : LandingPageComponent
  },
  {
    path : 'company', loadChildren : () => import('./company/company.module').then(m => m.CompanyModule)
  },
  {
    path : 'employee', loadChildren : () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
