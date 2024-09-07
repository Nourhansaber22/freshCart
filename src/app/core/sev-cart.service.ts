import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SevCartService {
// 
  constructor(private _HttpClient:HttpClient) { }

cartNumber:BehaviorSubject<number>=new BehaviorSubject(0); 

  myheade:any={token:localStorage.getItem("userToken")}

  addProductToCart(id:string):Observable<any>{

    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",

    {
        "productId": id
    },
    {
      headers:this.myheade
    }
    
    )
  }

  getCart():Observable<any>{

    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart",

  {
    headers:this.myheade
  }
    
    )
  }


  deleteSpacificCart(id:string):Observable<any>{
   
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers: this.myheade
      }
    )

  }



  updataProduct(id:string,newCount:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        "count": newCount
    },{
      headers:this.myheade
    }

    )
  }


  clearCart():Observable<any>{
    return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart",
      {
      headers:this.myheade
    }
  )
  }

}
