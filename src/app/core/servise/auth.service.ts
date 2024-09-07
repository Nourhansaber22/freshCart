import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// inject

constructor() { }

private readonly _HttpClient=inject(HttpClient)
private readonly _Router=inject(Router)

singUp(data:object):Observable<any>{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data)
}
singin(data:object):Observable<any>{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data)
}

  userData:any=null;

saveUserData():void{
  if(localStorage.getItem("userToken")!==null)
  {
   
   this.userData= jwtDecode(localStorage.getItem("userToken")!)
    
   console.log("userdata:" , this.userData)
  }
}

 sinOut():void{
  localStorage.removeItem("userToken");
  this.userData=null;
  this._Router.navigate(["/login"])

 }



 setEmailVerify(data:object):Observable<any>{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",data)
 }

 setCodeVerify(data:object):Observable<any>{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",data)
 }

 setReset(data:object):Observable<any>{
  return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",data)
 }



}
