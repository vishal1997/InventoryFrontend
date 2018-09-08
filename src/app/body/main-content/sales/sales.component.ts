import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { Product } from './product'
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class SalesComponent implements OnInit {

  
  productName:string;
  constructor(private _appService:AppService) {
  } 
  customer = new Customer();
  product=new Product();
  details= new Product();
  total:number;
  ngOnInit() {
  }
  today: number = Date.now();
  dataLoaded = false;
  onSubmit() {
    
    this.product.price = this.details.price;
    this.product.productName = this.details.productName;
    this.product.serialNumber = this.details.serialNumber;
    console.log(this.product);
    this._appService.addSold(this.product)
    .subscribe((resApp)=> resApp);
  }

  get(){
    this._appService.getSuggestions(this.product.productName)
    .subscribe((resApp)=> this.update(resApp));
  }
  update(data) {
    this.details = data;
    
    this.total = this.details.price * this.product.quantity;
    
  }
}
