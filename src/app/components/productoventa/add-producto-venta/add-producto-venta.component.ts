import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoVentaService } from 'src/app/services/productoventa.service';
import { ProductoVentaI } from 'src/app/models/productoventa';
@Component({
  selector: 'app-add-producto-venta',
  templateUrl: './add-producto-venta.component.html',
  styleUrls: ['./add-producto-venta.component.css']
})
export class AddProductoVentaComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    VentumId: ['', [Validators.required]],
    ProductoId: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    valor_unitario: ['', [Validators.required]],

  });
  constructor(
    private formBuilder: FormBuilder,
    private productoVentaService: ProductoVentaService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: ProductoVentaI = this.form.value;
    console.log(formValue);
    this.productoVentaService.createProductoVenta(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');


        this.router.navigateByUrl('/productoventas');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/productoventas');
  }

  get VentumId() { return this.form.get('VentumId'); }
  get ProductoId() { return this.form.get('ProductoId'); }
  get cantidad() { return this.form.get('cantidad'); }
  get valor_unitario() { return this.form.get('valor_unitario'); }

}
