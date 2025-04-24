import { Component,EventEmitter,Output } from '@angular/core';
import { Product } from '../../products';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() listOutPut: EventEmitter< Product[]> = new EventEmitter< Product[]>;

  findProductList:Product[]=[];

  constructor(private productService:ProductService){}

  onSearch(toSearch:string){
        if ( toSearch == ''){
           this.findProductList=this.productService.getProducts();
           this.listOutPut.emit(this.findProductList);
        }
        else{
           this.findProductList= this.productService.searchProducts(toSearch);
           this.listOutPut.emit(this.findProductList);
        }

  }

}
