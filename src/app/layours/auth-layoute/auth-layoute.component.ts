import { Component } from '@angular/core';
import { NavAuthComponent } from "../../component/nav-auth/nav-auth.component";
import { RouterOutlet } from '@angular/router';
import { FootersComponent } from "../../component/footers/footers.component";

@Component({
  selector: 'app-auth-layoute',
  standalone: true,
  imports: [NavAuthComponent, RouterOutlet, FootersComponent],
  templateUrl: './auth-layoute.component.html',
  styleUrl: './auth-layoute.component.scss'
})
export class AuthLayouteComponent {

}
