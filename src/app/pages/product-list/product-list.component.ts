import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../products';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() productList:Product[]=[];

  favorites:number[]=[]

  constructor(private productService:ProductService){}

  ngOnInit(){
        this.loadFavorites();
  }

  loadFavorites(){
    this.favorites=this.productService.getFavorites();
  }

  addToFavorites(id:number){
    this.productService.addToFavorites(id);
    this.loadFavorites();
  }

  removeFromFavorites(id:number){
    this.productService.removeFromFavorites(id);
    this.loadFavorites();
  }
   //revisa que el libro este en los favoritos
   checkFavorite(id_products:number){
    return this.favorites.includes(id_products);
   }

}
