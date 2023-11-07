import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaI } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.css']
})
export class ListVentaComponent implements OnInit{
  ventas: VentaI[] = [];
  public displayedColumns: string[] = ["id", "fechaVenta", "subtotal", "ciudadExp", "impuestos", "descuentos", "total", "ClienteId"]
  constructor(private ventaService: VentaService, private router: Router) { }
  ngOnInit(): void {
    this.llernarVenta()
  }
  llernarVenta() {
    this.ventaService.getAllVenta()
      .subscribe({
        next: (data) => {
          this.ventas = data.venta
          console.log(this.ventas)
        }
      })
  }
}
