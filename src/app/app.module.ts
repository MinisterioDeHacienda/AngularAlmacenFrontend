import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { UpdateClienteComponent } from './components/cliente/update-cliente/update-cliente.component';
import { DeleteClienteComponent } from './components/cliente/delete-cliente/delete-cliente.component';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';

import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuauxiliarComponent } from './components/menuauxiliar/menuauxiliar.component';
import { AddTipoProductoComponent } from './components/tipoproducto/add-tipo-producto/add-tipo-producto.component';
import { DeleteTipoProductoComponent } from './components/tipoproducto/delete-tipo-producto/delete-tipo-producto.component';
import { UpdateTipoProductoComponent } from './components/tipoproducto/update-tipo-producto/update-tipo-producto.component';
import { ListTipoProductoComponent } from './components/tipoproducto/list-tipo-producto/list-tipo-producto.component';
import { AddProductoComponent } from './components/producto/add-producto/add-producto.component';
import { UpdateProductoComponent } from './components/producto/update-producto/update-producto.component';
import { ListProductoComponent } from './components/producto/list-producto/list-producto.component';
import { AddVentaComponent } from './components/venta/add-venta/add-venta.component';
import { DeleteVentaComponent } from './components/venta/delete-venta/delete-venta.component';
import { UpdateVentaComponent } from './components/venta/update-venta/update-venta.component';
import { ListVentaComponent } from './components/venta/list-venta/list-venta.component';
import { DeleteProductoComponent } from './components/producto/delete-producto/delete-producto.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AsideComponent,
    FooterComponent,
    AddClienteComponent,
    UpdateClienteComponent,
    DeleteClienteComponent,
    ListClienteComponent,
    MenuauxiliarComponent,
    AddTipoProductoComponent,
    DeleteTipoProductoComponent,
    UpdateTipoProductoComponent,
    ListTipoProductoComponent,
    AddProductoComponent,
    UpdateProductoComponent,
    ListProductoComponent,
    AddVentaComponent,
    DeleteVentaComponent,
    UpdateVentaComponent,
    ListVentaComponent,
    DeleteProductoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
