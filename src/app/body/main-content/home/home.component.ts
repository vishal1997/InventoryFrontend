import { Component, OnInit } from '@angular/core';
import { InboundComponent } from '../inbound/inbound.component';
import { TrackingComponent } from '../tracking/tracking.component';
import { SalesTrackingComponent } from '../sales-tracking/sales-tracking.component';
import { SalesComponent} from '../sales/sales.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
