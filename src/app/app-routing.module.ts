import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuserComponent } from './guser/guser.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'guser', component: GuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
