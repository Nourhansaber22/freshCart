
import { Component, inject, OnInit } from '@angular/core';
import { SevCartService } from '../../core/sev-cart.service';
import { Icart } from '../../core/interface/icart';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  
  private readonly  _SevCartService=inject(SevCartService)
  private readonly  _ToastrService=inject(ToastrService)

  cartItem:Icart={} as Icart

  ngOnInit(): void { 
      this._SevCartService.getCart().subscribe({
        next:(res)=>{
         this.cartItem=res.data
          console.log(res.data)
        },
        error:(err)=>{
          console.log(err)
        }
      })
  }

  removeItem(id:string):void{
    this._SevCartService.deleteSpacificCart(id).subscribe({
      next:(res)=>{
      console.log(res)
      this._ToastrService.show("Remove")
      this.cartItem=res.data
      this._SevCartService.cartNumber.next(res.numOfCartItems)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  updataCount(id:string,count:number):void{
   if(count>0){
    this._SevCartService.updataProduct(id,count).subscribe({
      next:(res)=>{
      console.log(res)
      this._ToastrService.success("Done")
      this.cartItem=res.data
      },
      error:(err)=>{
     console.log(err)
      }
    })
   }
   else{
    this.removeItem(id)
   }
  }

  clearItem():void{
    this._SevCartService.clearCart().subscribe({
      next:(res)=>{
     console.log(res)
     if(res.message=="success"){
      this._ToastrService.error("you delete all product")
      this.cartItem={} as Icart
      this._SevCartService.cartNumber.next(0)
      
     }

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
