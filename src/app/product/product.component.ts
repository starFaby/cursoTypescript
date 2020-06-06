import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 product: any =[];
  constructor(private productosService: ProductosService) {
    this.product = productosService.productos.rows;
  }

  ngOnInit() {
    
  }

}
