import { Component, OnInit } from '@angular/core';
import { Product} from './product';
import { AppService } from '../../../app.service';
import { MdSnackBar } from '@angular/material';
@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrls: ['./inbound.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class InboundComponent implements OnInit {

  product = new Product();
  constructor(private _appService:AppService, public snackBar: MdSnackBar
  ) {}

  ngOnInit() {
  }
  addProductProgress = false;
  onSubmit() {
    this.addProductProgress = true;
    this._appService.addProduct(this.product)
    .subscribe(resAppData => this.openSnackBar(resAppData.status, "Done"));
  }

  openSnackBar(message: string, action: string) {

    this.addProductProgress = false;

    this.snackBar.open(message, action, {
      duration: 2000,
    });

    this.product = new Product();
  }

}
