import { Component, OnInit, Input } from '@angular/core';
import { ContactPayload } from '@capacitor-community/contacts';

@Component({
  selector: 'app-end-choice',
  templateUrl: './end-choice.component.html',
  styleUrls: ['./end-choice.component.scss'],
  standalone: false
})
export class EndChoiceComponent  implements OnInit {
  dateName: string = "";
  @Input() contacts: ContactPayload[] = []

  constructor() { }

  ngOnInit() {}

}
