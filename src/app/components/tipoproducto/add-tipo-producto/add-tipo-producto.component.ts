import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoProductoService } from 'src/app/services/tipoproducto.service';
import { TipoProductoI } from 'src/app/models/tipoproducto';
@Component({
  selector: 'app-add-tipo-producto',
  templateUrl: './add-tipo-producto.component.html',
  styleUrls: ['./add-tipo-producto.component.css']
})
export class AddTipoProductoComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
   nombre: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private tipoProductoService: TipoProductoService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: TipoProductoI = this.form.value;
    console.log(formValue);
    this.tipoProductoService.createTipoProducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');


        this.router.navigateByUrl('/tipoproductos');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/tipoproductos');
  }

  get nombre() { return this.form.get('nombre'); }
}
