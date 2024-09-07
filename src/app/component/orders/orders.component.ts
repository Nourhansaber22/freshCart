import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../core/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
 
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _OrdersService=inject(OrdersService)

  orders:FormGroup=new FormGroup({
    details:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required]),
    city:new FormControl(null,[Validators.required]),
  })
  cartId:string|null=''

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
      console.log(res)
      this.cartId =res.get("id")
      },
      error:(err)=>{
        console.log(err)
      }
    })
      
  }


  orderSubmit():void{
   this._OrdersService.checkOut(this.cartId ,this.orders.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.status=='success'){
        window.open(res.session.url,"_self")
      }
    },
    error:(err)=>{
     console.log(err)
    }
   })
    console.log(this.orders.value)

  }
}
