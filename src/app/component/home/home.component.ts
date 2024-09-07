import { Icatigory } from './../../core/interface/icatigory';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { Iproduct } from '../../core/interface/iproduct';
import { Subscription } from 'rxjs';
import { CatigoresService } from '../../core/catigores.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchPipe } from '../../core/search.pipe';
import { FormsModule } from '@angular/forms';
import { SevCartService } from '../../core/sev-cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
// import { console } from 'inspector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,OnDestroy {

  private readonly _ProductService=inject(ProductService)
  private readonly  _CatrgoirsComponent=inject(CatigoresService)
  private readonly _SevCartService=inject(SevCartService);
  private readonly _ToastrService=inject(ToastrService);
  private readonly _NgxSpinnerService=inject(NgxSpinnerService);
  
  
show:boolean=true ;

  arrList:Iproduct[]=[];
  ctiList:Icatigory[]=[];
  
  data:string="";
  
  getsub!:Subscription

  ngOnInit(): void {

   
    this._CatrgoirsComponent.getAllProduct().subscribe({
      next:(res)=>{
        this.ctiList=res.data;
        
      console.log(res.data)
      },
      error:(err)=>{
        console.log(err)

      }
    })

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
        this._SevCartService.cartNumber.next(res.numOfCartItems);
        console.log("heelo")
        
        
      },
      error:(err)=>{
       console.log(err)
      }
    })
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl:true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  customOptionsStatic: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl:true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: true
  }


  

 
}
