import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ContactItemComponent} from './contact/contact-item/contact-item.component';
import {ContactComponent} from './contact/contact/contact.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent,
    ContactComponent,
    ContactListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
