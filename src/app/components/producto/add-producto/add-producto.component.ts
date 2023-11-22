import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoI } from 'src/app/models/producto';
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    stockMin: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    TipoProductoId: ['', [Validators.required]],

  });
  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: ProductoI = this.form.value;
    console.log(formValue);
    this.productoService.createProducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');


        this.router.navigateByUrl('/productos');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/productos');
  }

  get nombre() { return this.form.get('nombre'); }
  get marca() { return this.form.get('marca'); }
  get precio() { return this.form.get('precio'); }
  get stockMin() { return this.form.get('stockMin'); }
  get cantidad() { return this.form.get('cantidad'); }
  get TipoProductoId() { return this.form.get('TipoProductoId'); }
}
