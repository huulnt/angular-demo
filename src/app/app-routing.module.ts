import {RouterModule, Routes} from '@angular/router';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: ContactListComponent},
  {path: 'contact/:id', component: ContactListComponent},
  {path: 'contact', component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


