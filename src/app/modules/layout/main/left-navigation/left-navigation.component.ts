import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as _ from 'lodash';
import * as master from '../../core/json/master.json';
import { replacementmenus } from './menu-replace';

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
      url: 'escritorio',
    },        
    {
      name: 'Entradas GADE',
      icon: 'ballot',
      url: 'entradasGADE',
    },
    {
      name: 'Expedientes',
      icon: 'description',          
      children: [
        {
          name: 'Mis Expedientes',
          icon: 'how_to_reg',
          url: '/misexpedientes'
        },
        { 
          name: 'Todos',
          icon: 'waves',
          url: '/todos'
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
            url: '/busquedaperfiles'
          }
        ]
      }
  ];
  constructor(
    private router: Router
  ) {
    this.menu = _.get(master, 'default');
  }

  ngOnInit(): void {
  }
  
  redirect = (route: any) => {
    const navigationExtras: NavigationExtras = {
      state: {
        name: '',
        refresh: Date.now()
      }
    }
    const url = this.getMenuUrl(route.url);
    _.set(route, 'url', url);
    _.set(navigationExtras, 'state.name', _.last(_.split(url, '/')));
    _.set(navigationExtras, 'state.data', route);

    // navigationExtras.state.name = _.last(_.split(url, '/'));
    // console.log(this.router.url);
    // console.log(url);
    // console.log(navigationExtras.state);
    
    // this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate([url], navigationExtras)
    this.router.navigateByUrl('/main', {skipLocationChange: true}).then(()=>
    this.router.navigate([url], navigationExtras));
  }

  getMenuUrl = (url: string) => {
    let str = _.cloneDeep(url);
    for(let i in replacementmenus) {
      str = _.replace(str, replacementmenus[i].old, replacementmenus[i].new);
    }
    return str;
  }
}
