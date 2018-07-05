import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {ContactTag} from './contact/common/modal/contactTag';


@Injectable({providedIn: 'root'})
export class ContactService {

  constructor() {
  }
  getContactsTag(): Observable<ContactTag[]> {
    return of(CONTACTTAG);
  }

  getHeroTag(id: number): Observable<ContactTag> {
    return of(CONTACTTAG.find(hero => hero.id === id));
  }
}
