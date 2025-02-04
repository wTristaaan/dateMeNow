import { Component, OnInit, Input } from '@angular/core';
import { ContactPayload } from '@capacitor-community/contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  standalone: false
})
export class ContactListComponent  implements OnInit {
  @Input() contacts: ContactPayload[] = []

  constructor() { }

  ngOnInit() {
    console.log(this.contacts)
  }

}
