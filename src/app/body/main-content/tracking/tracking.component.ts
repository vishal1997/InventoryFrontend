import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

export interface ProductDetails {
    productName?: string,
     price? : number,
    quantity? : number,
    serialNumber? : number,

}
@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'},
})


export class TrackingComponent implements OnInit {

  constructor( private _appService:AppService,private router:Router) { }
  displayedColumns: string[] = ['serailNumber', 'productName', 'quantity', 'price'];
  dataLoaded=false;
  data = [];
  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this._appService.getProduct()
    .subscribe((resApp)=> this.update(resApp));
  }

  update(data) {
    this.data = data;
    this.dataLoaded = true;
  }
}
