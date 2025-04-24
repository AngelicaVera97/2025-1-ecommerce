import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProductListComponent } from '../../pages/product-list/product-list.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../products';

@Component({
  selector: 'app-vista-principal',
  imports: [SearchBarComponent, ProductListComponent],
  templateUrl: './vista-principal.component.html',
  styleUrl: './vista-principal.component.css'
})
export class VistaPrincipalComponent {
  title = 'product-list';
  myProductList:Product[] = [];

  
  constructor(private productService :ProductService ) {  }
  
  ngOnInit() {
    this.loadInitialProducts(); 
  }
   

  loadInitialProducts() {
    this.myProductList = this.productService.getProducts();
  }

  searchEvent(eventList:Product[]){
    this.myProductList = eventList;
    console.log(this.myProductList);
  }

}
