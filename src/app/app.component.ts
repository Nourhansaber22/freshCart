import { Component } from '@angular/core';

import { FootersComponent } from './component/footers/footers.component';
import { NavAuthComponent } from "./component/nav-auth/nav-auth.component";
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from './component/nav-blank/nav-blank.component';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FootersComponent, NavAuthComponent,NavBlankComponent,NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'webSite';
  
}
