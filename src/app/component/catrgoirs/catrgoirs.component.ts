import { Component, inject } from '@angular/core';
import { CatigoresService } from '../../core/catigores.service';
import { Icatigory } from '../../core/interface/icatigory';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catrgoirs',
  standalone: true,
  imports: [],
  templateUrl: './catrgoirs.component.html',
  styleUrl: './catrgoirs.component.scss'
})
export class CatrgoirsComponent {

  private readonly _CatigoresService=inject(CatigoresService)


  ctiList:Icatigory[]=[];
  
  data:string="";
  
  getsub!:Subscription

  ngOnInit(): void {

   
    this._CatigoresService.getAllProduct().subscribe({
      next:(res)=>{
        this.ctiList=res.data;
        
      console.log(res.data)
      },
      error:(err)=>{
        console.log(err)

      }
    })

}
}
