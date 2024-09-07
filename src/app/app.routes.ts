import { Routes } from '@angular/router';
import { AuthLayouteComponent } from './layours/auth-layoute/auth-layoute.component';
import { authNavGuard } from './core/auth-nav.guard';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { BlankLayoutsComponent } from './layours/blank-layouts/blank-layouts.component';
import { authGuard } from './core/auth.guard';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { CatrgoirsComponent } from './component/catrgoirs/catrgoirs.component';
import { ProductsComponent } from './component/products/products.component';
import { BrandsComponent } from './component/brands/brands.component';
import { DetialsComponent } from './component/detials/detials.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AllOldersComponent } from './component/all-olders/all-olders.component';
import { OrdersComponent } from './component/orders/orders.component';

// ,canActivate:[authNavGuard]
// ,canActivate:[authGuard]

export const routes: Routes = [

    {path:"",component:AuthLayouteComponent,canActivate:[authNavGuard],children:[

        {path:"",redirectTo:"login",pathMatch:"full"},
        {path:"login",component:LoginComponent},
        {path:"register",component:RegisterComponent},
        {path:"forget",component:ForgetPasswordComponent}

    ]},
    {path:"",component:BlankLayoutsComponent,canActivate:[authGuard],children:[

        {path:"",redirectTo:"home",pathMatch:"full"},
        {path:"home",component: HomeComponent},
        {path:"cart",component:CartComponent},
        {path:"categories",component:CatrgoirsComponent},
        {path:"product",component:ProductsComponent},
        {path:"brands",component:BrandsComponent},
        {path:"details/:id",component:DetialsComponent},
        {path:"allorders",component:AllOldersComponent},
        {path:"orders/:id",component:OrdersComponent},

    ]},

    {path:"**",component:NotfoundComponent}

];



