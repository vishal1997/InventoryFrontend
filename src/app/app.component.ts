import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AppHeaderComponent } from './header/app-header.component';
import { BodyInternalComponents } from './body/body.internal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export const AppInternalComponents = [AppHeaderComponent, BodyInternalComponents]