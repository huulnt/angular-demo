import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactItemComponent} from './contact-item/contact-item.component';
import {NgModule} from '@angular/core';

const contact: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      {
        path: '',
        component: ContactListComponent,
        children: [
          {
            path: ':id',
            component: ContactItemComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(contact)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}
