import {Component, OnInit} from '@angular/core';
import {Contact} from '../common/modal/contact';
import {ContactService} from '../../contact.serivce';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;

  constructor(private contact: ContactService) {
  }

  ngOnInit() {
    this.getContacts();
  }

  selectContact(item) {
    this.selectedContact = item;
  }

  getContacts(): void {
    this.contact.getContacts()
      .subscribe(contact => this.contacts = contact);
  }
}
