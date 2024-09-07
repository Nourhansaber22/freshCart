import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MytranslateService {

  private readonly _TranslateService=inject(TranslateService)
  private readonly _platId=inject(PLATFORM_ID)
  
  constructor() { 
   if(isPlatformBrowser(this._platId)){

    let saveLang=localStorage.getItem("lang");

    this._TranslateService.setDefaultLang('en')
  
    if(saveLang!=null){
      this._TranslateService.use(saveLang !)
    }
  
    this.changDir()

   }

  

  }

  changDir():void{
    let saveLang=localStorage.getItem("lang");

  if(saveLang=="en"){   //dirc  ltr   
    document.documentElement.dir='ltr'

  }else if(saveLang=="ar"){   //dir  rtl
    
    document.documentElement.dir='rtl'

  }
  }



  changeLang(lang:string):void{
    if(isPlatformBrowser(this._platId)){
      localStorage.setItem("lang",lang)

      this._TranslateService.use(lang);
  
      this.changDir()

    }
   

  }


}
