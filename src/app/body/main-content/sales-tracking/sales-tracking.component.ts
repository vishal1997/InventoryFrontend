import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { Filter } from './filter';
import { Sold } from './sold';
@Component({
  selector: 'app-sales-tracking',
  templateUrl: './sales-tracking.component.html',
  styleUrls: ['./sales-tracking.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'},
})
export class SalesTrackingComponent implements OnInit {

  constructor(private _appService:AppService,private router:Router) { }

  product = new Filter();
  sold = new Sold();
  ngOnInit() {
  }
  data="";
  dataLoaded = false;
  onSubmit() {
    this._appService.getProductByFilter(this.product)
    .subscribe((resApp)=> this.update(resApp));
  }

  update(data) {
    this.sold = data;
    this.dataLoaded = true;
  }
}
