import { headersInterceptor } from './core/interceptors/headers.interceptor';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideClientHydration(),
     provideHttpClient(withFetch(),withInterceptors([headersInterceptor])),
     importProvidersFrom(BrowserAnimationsModule),
     provideToastr(),
    importProvidersFrom(
      NgxSpinnerModule,
      TranslateModule.forRoot({
        defaultLanguage:"en",
        loader:{
          provide:TranslateLoader,
          useFactory:HttpLoaderFactory,
          deps:[HttpClient]
        }
      })
    )
  ]
};
