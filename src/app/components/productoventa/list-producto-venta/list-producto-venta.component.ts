import { Component, OnInit } from '@angular/core';
import { ProductoVentaI } from 'src/app/models/productoventa';
import { Router } from '@angular/router';
import { ProductoVentaService } from '../../../services/productoventa.service'

@Component({
  selector: 'app-list-producto-venta',
  templateUrl: './list-producto-venta.component.html',
  styleUrls: ['./list-producto-venta.component.css']
})
export class ListProductoVentaComponent implements OnInit {
  productoventas: ProductoVentaI[] = [];
  public displayedColumns: string[] = ["id", "VentaId", "ProductoId", "cantidad", "valor_unitario"]
  constructor(private productoVentaService: ProductoVentaService, private router: Router) { }
  ngOnInit(): void {
    this.llernarProductoVenta()
  }
  llernarProductoVenta() {
    this.productoVentaService.getAllProductoVenta()
      .subscribe({
        next: (data) => {
          this.productoventas = data.productoVenta
          console.log(this.productoventas)
        }
      })
  }
}
