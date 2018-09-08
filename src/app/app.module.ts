import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent , AppInternalComponents } from './app.component';
import { LeftPanelComponent } from './body/left-panel/left-panel.component';
import { RightPanelComponent } from './body/right-panel/right-panel.component';
import { MainContentComponent } from './body/main-content/main-content.component';
import { AppHeaderComponent} from './header/app-header.component';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy} from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRouterModule, RoutingInternalComponents } from './routing/app-router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NoConflictStyleCompatibilityMode, MdInputModule, MdButtonModule } from '@angular/material';
import 'hammerjs';
import { HomeComponent } from './body/main-content/home/home.component';
import { InboundComponent } from './body/main-content/inbound/inbound.component';
import { TrackingComponent } from './body/main-content/tracking/tracking.component';
import { SalesTrackingComponent } from './body/main-content/sales-tracking/sales-tracking.component';
import { SalesComponent } from './body/main-content/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    AppInternalComponents, RoutingInternalComponents, 
    LeftPanelComponent,
    RightPanelComponent,
    MainContentComponent,
    AppHeaderComponent,
    HomeComponent,
    InboundComponent,
    TrackingComponent,
    SalesTrackingComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, MaterialModule, AppRouterModule, 
    BrowserAnimationsModule, FlexLayoutModule, ReactiveFormsModule,
    NoConflictStyleCompatibilityMode,MdInputModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
