import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Contact} from './contact/common/modal/contact';
import {CONTACT} from './mock-contact';


@Injectable({providedIn: 'root'})
export class ContactService {

  constructor() {
  }

  getContacts(): Observable<Contact[]> {
    return of(CONTACT);
  }

  getHero(id: number): Observable<Contact> {
    return of(CONTACT.find(hero => hero.id === id));
  }
}
