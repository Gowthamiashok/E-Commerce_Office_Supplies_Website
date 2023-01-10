import { Component, OnInit } from '@angular/core';
import { faUserAlt,faEnvelope,faMapMarkerAlt,faBuilding,faCreditCard,faCalendarAlt,faMoneyCheckAlt,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  faUserAlt = faUserAlt;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faBuilding = faBuilding;
  faCreditCard = faCreditCard;
  faCalendarAlt = faCalendarAlt;
  faMoneyCheckAlt = faMoneyCheckAlt;
  faMoneyBillAlt = faMoneyBillAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
