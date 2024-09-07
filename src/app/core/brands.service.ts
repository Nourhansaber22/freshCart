import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient: HttpClient) { }


  getAllProductbrands():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
}
