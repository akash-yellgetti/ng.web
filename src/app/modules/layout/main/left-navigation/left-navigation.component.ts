import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as menus from '../../core/json/menus.json';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {
  menu = [
    {
      name: 'Escritorio',
      icon: 'desktop_windows',
      route: 'escritorio',
    },        
    {
      name: 'Entradas GADE',
      icon: 'ballot',
      route: 'entradasGADE',
    },
    {
      name: 'Expedientes',
      icon: 'description',          
      children: [
        {
          name: 'Mis Expedientes',
          icon: 'how_to_reg',
          route: '/misexpedientes'
        },
        { 
          name: 'Todos',
          icon: 'waves',
          route: '/todos'
        }
      ]
    },
    {
      name: 'Perfiles',
      icon: 'group',
      children: [
          {
            name: 'Búsqueda Perfil',
            icon: 'search',
            route: '/busquedaperfiles'
          }
        ]
      }
  ];
  constructor() { 
    this.menu = _.get(menus, 'default');
    console.log(this.menu);
    
    // this.menu = menus.default;
  }

  ngOnInit(): void {
  }

}
