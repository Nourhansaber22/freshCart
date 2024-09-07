import { Component } from '@angular/core';
import { NavBlankComponent } from "../../component/nav-blank/nav-blank.component";
import { RouterOutlet } from '@angular/router';
import { FootersComponent } from "../../component/footers/footers.component";

@Component({
  selector: 'app-blank-layouts',
  standalone: true,
  imports: [NavBlankComponent, RouterOutlet, FootersComponent],
  templateUrl: './blank-layouts.component.html',
  styleUrl: './blank-layouts.component.scss'
})
export class BlankLayoutsComponent {

}
