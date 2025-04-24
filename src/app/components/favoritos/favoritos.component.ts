import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../products';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
   myProductlist:Product[]=[];
  
    favorites:number[]=[];
  
    datosFavoritos:Product[]=[];
  
    constructor (private productService:ProductService){}
  
    ngOnInit(){
      this.loadInitialProducts();
      this.loadFavorites();
  
      this.datosFavoritos = this.myProductlist.filter(product => this.favorites.includes(product.id_products));
      console.log(this.datosFavoritos);
    }
  
    loadFavorites(){
      this.favorites=this.productService.getFavorites();
      console.log(this.favorites);
    }
  
    loadInitialProducts(){
      this.myProductlist = this.productService.getProducts();
      console.log(this.myProductlist);
    }


}
