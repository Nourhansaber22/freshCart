import { Component, inject, NgModule } from '@angular/core';
import { Iproduct } from '../../core/interface/iproduct';
import { ProductService } from '../../core/product.service';
import { ToastrService } from 'ngx-toastr';
import { SevCartService } from '../../core/sev-cart.service';
import { Subscription } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../core/search.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports:[CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  private readonly _ProductService=inject(ProductService)
  private readonly _SevCartService=inject(SevCartService);
  private readonly _ToastrService=inject(ToastrService);
  arrList:Iproduct[]=[];
   
  data:string="";
 
  
  getsub!:Subscription
  
  // getsub!:Subscription

  ngOnInit(): void {

    // this._CatrgoirsComponent.getAllProduct().subscribe({
    //   next:(res)=>{
    //     this.ctiList=res.data;
    //   console.log(res.data)
    //   },
    //   error:(err)=>{
    //     console.log(err)

    //   }
    // })

   this.getsub= this._ProductService.getProductHome().subscribe({
        next:(res)=>{
          this.arrList=res.data
        console.log(res.data)
        },
        error:(err)=>{

        }
      })
  }



  ngOnDestroy(): void {
      this.getsub?.unsubscribe()
  }

  addCart(id:string):void{
    this._SevCartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res)
        this._ToastrService.success(res.message,'Done')
      },
      error:(err)=>{
       console.log(err)
      }
    })
  }

}
