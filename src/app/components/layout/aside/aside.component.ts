import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clientes'

      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-fw pi-qrcode',
        routerLink:'/tipoproductos'
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink:'/productos'
      },
      {
        label: 'Ventas',
        icon: 'pi pi-money-bill',
        routerLink:'/ventas'
      },
      {
        label: 'ProductoVentas',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink:'/productoventas'
      }

    ];

  }

}
