import { Injectable,signal } from '@angular/core';
import { Product } from '../products';
import productsData from '../products.json'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product : Product[] = productsData;
  private searchResults = this.product;

      private count = signal <number>(0)

      getCounter(){
        return this.count;
      }
  
      incremento(){
        this.count.update(n => n + 1);
      }
  
      decremento(){
        this.count.update(n => n -1);
      }
  
      reset(){
        this.count.set(0);
      }
  
  
    constructor() { }
  
  // obtiene la lista de los libros
    getProducts(){
      return this.product;
    }
  
    searchProducts(term:string):Product[]{
        const filteredProducts=this.product.filter(
           (product)=>
              product.name.toLowerCase().includes(term.toLowerCase())
        );
        this.searchResults=filteredProducts;
        return this.searchResults;
    }
  
    getFavorites():number[]{
      const favoritesString = localStorage.getItem('favorites');
  
      if(favoritesString === null){
        return [];
      }
  
      const favorites = JSON.parse(favoritesString);
      const length = favorites.length;
      this.count.update(n => length );
  
    return favorites;  
    
  }
  
    addToFavorites(id:number){
      this.incremento();
      const favorites= this.getFavorites();
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  
    removeFromFavorites(id:number){
      this.decremento();
      const favorites= this.getFavorites();
      const updateProducts= favorites.filter(id_products => id_products!==id);
      localStorage.setItem('favorites', JSON.stringify(updateProducts));
    }
  
  

}
