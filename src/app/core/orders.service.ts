import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient:HttpClient) { }

  urlServa:string="http://localhost:4200/"
  myHeaders:any={token:localStorage.getItem("userToken")}

  checkOut(idCart: string | null, shipingDetails: object): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${idCart}?url=${this.urlServa}`,
      {
        "shippingAddress": shipingDetails
      },
      {
        headers: this.myHeaders
      }
    );
  }
}
