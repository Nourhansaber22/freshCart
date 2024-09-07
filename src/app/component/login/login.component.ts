import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/servise/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _AuthService=inject(AuthService)
  private readonly _Router=inject(Router)

  loginform:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/ )]),
  })

  masErro:string="";
  isloading:boolean=false;
  mesSuacces:boolean=false;


          loginsubmit():void
        {
        if(this.loginform.valid){

          this.isloading=true;

          this._AuthService.singin(this.loginform.value).subscribe({
            next:(res)=>{
              this.isloading=false;
              if(res.message=="success")
              {
                setTimeout(()=>{
                  // 1-save token
                  localStorage.setItem("userToken" , res.token)
                  // 2-dcode token
                this._AuthService.saveUserData();
                  this.mesSuacces=true;
                  // 3-navigate
                  this._Router.navigate(["/home"])
                },2000)
              }
              console.log(res)
            },
            error:(err:HttpErrorResponse)=>{
              this.masErro=err.error.message
              this.isloading=false;
          
            }
          })
        

        }


        }


    

}
