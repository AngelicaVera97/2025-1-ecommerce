import { Routes } from '@angular/router';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { VistaPrincipalComponent } from './components/vista-principal/vista-principal.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


export const routes: Routes = [
    {path:'', component: VistaPrincipalComponent, title:"Merch"},
    {path:'carrito', component:FavoritosComponent, title:"Carrito"},
    {path:'pagar', component:CheckoutComponent, title:"Paymenth"}  
];
