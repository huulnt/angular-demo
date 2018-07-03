import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactItemComponent} from './contact-item/contact-item.component';
import {ContactComponent} from './contact/contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactListComponent,
    ContactItemComponent,
    ContactComponent]
})
export class ContactModule {}
