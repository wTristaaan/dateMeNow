import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/dates.service';
import { ContactPayload, Contacts, EmailType, PhoneType, PostalAddressType } from '@capacitor-community/contacts';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss'],
  standalone: false
})
export class HeartComponent  implements OnInit {
  cards: any[] = [];
  userChoice: any[] = [];
  shouldShowSwipeableCard: boolean = true;
  contacts: ContactPayload[] = [{
    contactId: '12345',
    name: {
      given: 'John',
      family: 'Doe',
      display: null,
      middle: null,
      prefix: null,
      suffix: null
    },
    organization: {
      company: 'ACME Corp',
      jobTitle: 'Software Engineer',
      department: null
    },
    birthday: {
      year: 1990,
      month: 5,
      day: 15
    },
    note: 'Best friend',
    phones: [
      { type: PhoneType.Home, number: '123-456-7890' }
    ],
    emails: [
      { type: EmailType.Home, address: 'john.doe@example.com' }
    ],
    urls: ['https://example.com'],
    postalAddresses: [
      {
        type: PostalAddressType.Home,
        label: '123 Main St, Anytown, USA',
        street: '123 Main St',
        city: 'Anytown',
        region: 'CA',
        postcode: '12345',
        country: 'USA'
      }
    ],
    image: {
      base64String: 'https://ui-avatars.com/api/?name=John+Doe'
    }
  }];

  constructor(
    private dateService: DateService,
  ) {}

  async ngOnInit() {
    this.dateService.getDateIdea().subscribe(dateIdea => {
      this.cards = dateIdea;
      console.log('Données reçues :', this.cards); // Vérifiez les données reçues
      console.log('Nombre de cartes :', this.cards.length); // Doit toujours être 26
    })

    this.contacts = await this.getContactsData()
  }

  logChoice(choice: any) {
    this.userChoice.push({
      "user": "1",
      "activity": choice.payload.title,
      "choice": choice.choice
    })
    console.log(this.userChoice.length)
    if(this.userChoice.length == 26)
      this.shouldShowSwipeableCard = false
  };

  async getContactsData(){
    const result = await Contacts.getContacts({
      projection: {
        name: true,
        phones: true,
      },
    });
    return result.contacts
  };
}
