import { Component, OnInit  } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-brand',
  templateUrl: './header-brand.component.html',
  providers:[AppService]
})
export class HeaderBrandComponent {

  constructor(private _appService: AppService, private router:Router) {}


  ngOnInit() {

  }
}




