import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/servise/auth.service';
import { transition } from '@angular/animations';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/servise/mytranslate.service';
import { SevCartService } from '../../core/sev-cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit {
  
   readonly _AuthService=inject(AuthService)
   private readonly _MytranslateService=inject(MytranslateService)
   readonly _TranslateService=inject(TranslateService)
   readonly _SevCartService=inject(SevCartService)

   countNumber:number=0;

 change(lang:string):void{
   this._MytranslateService.changeLang(lang);
 }

 ngOnInit(): void {
   
  this._SevCartService.getCart().subscribe({
     next:(res)=>{
     console.log('cart item' , res);
     this._SevCartService.cartNumber.next(res. numOfCartItems)
     }
  })

  this._SevCartService.cartNumber.subscribe({
    next:(data)=>{
     this.countNumber=data
    },
  })
 }

}
