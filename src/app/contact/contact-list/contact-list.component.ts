import {Component, OnChanges, OnInit} from '@angular/core';
import {Contact} from '../common/modal/contact';
import {ContactService} from '../../contact.serivce';
import {isArray} from 'util';
import {ContactItemComponent} from '../contact-item/contact-item.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnChanges {
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

  search($event, value) {
    this.getContacts();
    if ($event.keyCode === 13 && value === '') {
      this.getContacts();
    } else if ($event.keyCode === 13) {
      if (value.includes('#')) {
        const contact = [];
        for (const item of this.contacts) {
          for (const tag of item.tag) {
            const search = value.replace('#', '');
            if (tag.name.toLowerCase().includes(search.toLowerCase())) {
              contact.push(item);
            }
          }
        }
        this.contacts = this.removeDuplicates(contact);
        console.log(this.contacts);
      } else {
        const contach = this.contacts;
        const result = this.seachItem(contach, value);
        this.contacts = result;
      }
    }
  }

  seachItem(item, value) {
    return item.filter(str => {
      return str.name.toLowerCase().includes(value) || str.copmpany.toLowerCase().includes(value);
    });
  }

  removeDuplicates(myArr) {
    return myArr.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    });
  }

  ngOnChanges() {
    console.log(this.contact);
  }
}
