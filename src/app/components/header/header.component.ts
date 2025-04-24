import { Component,Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  counter!: Signal<number>

  constructor(private productService:ProductService){
    this.counter= this.productService.getCounter();
  }

}
