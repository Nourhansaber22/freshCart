import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/product.service';
import { Iproduct } from '../../core/interface/iproduct';

@Component({
  selector: 'app-detials',
  standalone: true,
  imports: [],
  templateUrl: './detials.component.html',
  styleUrl: './detials.component.scss'
})
export class DetialsComponent implements OnInit ,OnDestroy {

  private _ActivatedRoute=inject(ActivatedRoute)
  private readonly _ProductServicet=inject(ProductService);

  datielsProduct:Iproduct|null=null

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        let idProduct=p.get('id');
        console.log(p.get('id'));

      this._ProductServicet.getSpacetHome(idProduct).subscribe({
        next:(res)=>{

        this.datielsProduct=res.data;
          console.log(res.data)

        },
        error:(err)=>{
          console.log(err)

        }
      })


      }
    })
      
  }

  ngOnDestroy(): void {
     
  }


}
