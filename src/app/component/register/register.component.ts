import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/servise/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy
{
 

  getsubreg!:Subscription
  private readonly _AuthService=inject(AuthService)
  private readonly _Router=inject(Router)

  registerform:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/ )]),
    rePassword:new FormControl(null),
    phone:new FormControl(null),
  },this.confirmPassword)

  masErro:string="";
  isloading:boolean=false;
  mesSuacces:boolean=false;


          registersubmit():void
        {
        if(this.registerform.valid){

          this.isloading=true;

        this.getsubreg=  this._AuthService.singUp(this.registerform.value).subscribe({
            next:(res)=>{
              this.isloading=false;
              if(res.message=="success")
              {
                setTimeout(()=>{
                  this.mesSuacces=true;
                  this._Router.navigate(["/login"])
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


    confirmPassword(g:AbstractControl){
      if(g.get("password")?.value===g.get("rePassword")?.value){

        return null
      }else{
        return {mismatch:true}
      }

    }


    ngOnDestroy(): void {
        this.getsubreg?.unsubscribe();
    }
}


// ,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/gm)]
// ,[Validators.required,Validators.pattern(pattern(/^01[0125][0-9]{8}$/)]