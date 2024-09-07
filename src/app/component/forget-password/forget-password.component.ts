import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/servise/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

 private readonly _AuthService=inject(AuthService)
 private readonly _Router=inject(Router)

  step:number=1;

  verifyEmail:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email])
  })
  verifyCode:FormGroup=new FormGroup({
    resetCode:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6}$/)])
  })

  reset:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)])
  })



  step1():void{

  let emailValue = this.verifyEmail.get("email")?.value

  this.reset.get("email")?.patchValue(emailValue)

   this._AuthService.setEmailVerify(this.verifyEmail.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.statusMsg==="success"){
       this.step=2;
      }

    },
    error:(err)=>{
      console.log(err)
    }
   })
  }
  step2():void{
   this._AuthService.setCodeVerify(this.verifyCode.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.status==="success"){
       this.step=3;
      }

    },
    error:(err)=>{
      console.log(err)
    }
   })
  }
  stepe3():void{
   this._AuthService.setReset(this.reset.value).subscribe({
    next:(res)=>{
      console.log(res)
     localStorage.setItem("userToken" ,res.token);

     this._AuthService.saveUserData();

     this._Router.navigate(["/home"]);

    },
    error:(err)=>{
      console.log(err)
    }
   })
  }


}
