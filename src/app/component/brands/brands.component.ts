import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrandsService } from '../../core/brands.service';
import { Ibrands } from '../../core/interface/ibrands';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {


  private readonly _BrandsService=inject(BrandsService)


  ctiList:Ibrands[]=[];
  
  getsub!:Subscription

  ngOnInit(): void {

   
    this._BrandsService.getAllProductbrands().subscribe({
      next:(res)=>{
        this.ctiList=res.data;
        
      console.log(res.data)
      },
      error:(err)=>{
        console.log(err)

      }
    })

}


    showalert():void{
      
    }

}
