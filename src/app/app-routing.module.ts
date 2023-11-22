import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { DeleteClienteComponent } from './components/cliente/delete-cliente/delete-cliente.component';
import { UpdateClienteComponent } from './components/cliente/update-cliente/update-cliente.component';
import { ListTipoProductoComponent } from './components/tipoproducto/list-tipo-producto/list-tipo-producto.component';
import { ListProductoComponent } from './components/producto/list-producto/list-producto.component';
import { AddTipoProductoComponent } from './components/tipoproducto/add-tipo-producto/add-tipo-producto.component';
import { DeleteTipoProductoComponent } from './components/tipoproducto/delete-tipo-producto/delete-tipo-producto.component';
import { UpdateTipoProductoComponent } from './components/tipoproducto/update-tipo-producto/update-tipo-producto.component';
import { AddProductoComponent } from './components/producto/add-producto/add-producto.component';
import { DeleteProductoComponent } from './components/producto/delete-producto/delete-producto.component';
import { UpdateProductoComponent } from './components/producto/update-producto/update-producto.component';
import { ListVentaComponent } from './components/venta/list-venta/list-venta.component';
import { AddVentaComponent } from './components/venta/add-venta/add-venta.component';
import { DeleteVentaComponent } from './components/venta/delete-venta/delete-venta.component';
import { UpdateVentaComponent } from './components/venta/update-venta/update-venta.component';
import { ListProductoVentaComponent } from './components/productoventa/list-producto-venta/list-producto-venta.component';
import { AddProductoVentaComponent } from './components/productoventa/add-producto-venta/add-producto-venta.component';
import { DeleteProductoVentaComponent } from './components/productoventa/delete-producto-venta/delete-producto-venta.component';
import { UpdateProductoVentaComponent } from './components/productoventa/update-producto-venta/update-producto-venta.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: ListClienteComponent
  },
  {
    path: "clientes/add",
    component: AddClienteComponent
  },
  {
    path: "clientes/delete",
    component: DeleteClienteComponent
  },
  {
    path: "clientes/update",
    component: UpdateClienteComponent
  },

  {
    path: "tipoproductos",
    component: ListTipoProductoComponent
  },
  {
    path: "tipoproductos/add",
    component: AddTipoProductoComponent
  },
  {
    path: "tipoproductos/delete",
    component: DeleteTipoProductoComponent
  },
  {
    path: "tipoproductos/update",
    component: UpdateTipoProductoComponent
  },

  {
    path: "productos",
    component: ListProductoComponent
  },
  {
    path: "productos/add",
    component: AddProductoComponent
  },
  {
    path: "productos/delete",
    component: DeleteProductoComponent
  },
  {
    path: "productos/update",
    component: UpdateProductoComponent
  },

  {
    path: "ventas",
    component: ListVentaComponent
  },
  {
    path: "ventas/add",
    component: AddVentaComponent
  },
  {
    path: "ventas/delete",
    component: DeleteVentaComponent
  },

  {
    path: "ventas/update",
    component: UpdateVentaComponent
  },
  {
    path: "productoventas",
    component: ListProductoVentaComponent
  },
  {
    path: "productoventas/add",
    component: AddProductoVentaComponent
  },
  {
    path: "productoventas/delete",
    component: DeleteProductoVentaComponent
  },

  {
    path: "productoventas/update",
    component: UpdateProductoVentaComponent
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
