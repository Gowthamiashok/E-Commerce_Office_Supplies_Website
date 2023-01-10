import { Component, OnInit } from '@angular/core';
import { faPhoneAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  constructor() { }

  message() {
    if(!confirm('Thank you for contacting us, we will look into your queries and contact through your email soon.')) return;
  }

  ngOnInit(): void {
  }
  
}
