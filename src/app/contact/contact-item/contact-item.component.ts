import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../common/modal/contact';
import {ContactTag} from '../common/modal/contactTag';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contacts$: Contact[];
  @Input() selected$: ContactTag[];
  contacts: Contact[];
  isClick: Boolean = false;
  selectedTag: ContactTag[];

  constructor() {
  }

  ngOnInit() {
    this.contacts = this.contacts$;
    this.selectedTag = {id: 0, name: ''};
  }

  showTagPopUp() {
    if (!this.isClick) {
      return this.isClick = true;
    } else {
      return this.isClick = false;
    }
  }

  changStatus(item) {
    if (!item.status) {
      return item.status = true;
    } else {
      return item.status = false;
    }
  }

  deleteTag(tag) {
    const allTag = this.contacts.tag;
    const index = allTag.indexOf(tag);
    if (index !== -1) {
      allTag.splice(index, 1);
    }
  }

  addTag($event) {
    if ($event.keyCode === 13 && !this.selectedTag.id) {
      const id = this.contacts.tag.length;
      const status = true;
      const name = $event.target.value;
      const tag = {id, status, name};
      // console.log(item);
      this.contacts.tag.push(tag);
      this.selectedTag = [];
    } else {
      this.selectedTag = [];
    }
  }

  editTag($event, item) {
    this.selectedTag = item;
    if ($event.keyCode === 13) {
      this.selectedTag = [];
    }
  }

}
