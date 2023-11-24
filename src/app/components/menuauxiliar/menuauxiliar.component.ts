import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menuauxiliar',
  templateUrl: './menuauxiliar.component.html',
  styleUrls: ['./menuauxiliar.component.css']
})
export class MenuauxiliarComponent {
  items: MenuItem[] =[];
  @Input() rutaDeseada: string = '';

  ngOnInit(): void {
    this.items = [
      {
        label: 'Añadir' ,
        icon: 'pi pi-fw pi-plus',        
        routerLink: this.rutaDeseada+'/add',  
      }

    ]
  }


}