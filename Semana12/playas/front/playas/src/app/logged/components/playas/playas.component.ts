import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { PlayaService } from '../../services/playa.service';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

import {animate, state, style, transition, trigger} from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PlayasComponent implements OnInit, OnDestroy{

  playasList:any;
  expandedElement: any | null;
  paginator;
  estiloMapa= [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ];
  @ViewChild(MatPaginator) set matSort(content: MatPaginator) {
    this.paginator = content;
    if (this.paginator){
       this.playas.paginator = this.paginator;
    }
  }

  sort;
  @ViewChild(MatSort) set content(content: MatSort) {
    this.sort = content;
    if (this.sort){
       this.playas.sort = this.sort;
    }
  }

  displayedColumns: string[] = ['playa_id', 'playa_nom', 'tot', 'lib', 'ocu'];
  playas;

  suscriptor:Subscription;

  constructor(private _sPlaya:PlayaService) { }

  ngOnInit() {
    this.setPlayasList();
    
  }

  setPlayasList(){
    // CON OBSERVABLES
    this.suscriptor = this._sPlaya.getPlayas().subscribe((playas:any)=>{
      // iterando el contenido de las playas [content]
      playas.content.forEach((playa)=>{
        // 'playa' => es un elemento playa
        // creamos 3 variables en cada iteracion (para cada playa)
        let total,libres,ocupados = 0;
        // calculamos el total del arreglo de nombre t_slotplayas de cada elemento
        total = playa.t_slotplayas.length;
        // calculamos el total de slots libre
        libres = playa.t_slotplayas.filter(slot=>slot.slotp_est==0).length;
        // calculamos el total de slots ocupados
        ocupados = playa.t_slotplayas.filter(slot=>slot.slotp_est==1).length;
        // asignando 3 nuevas propiedades al objeto playa
        playa.tot = total;
        playa.lib = libres;
        playa.ocu = ocupados;
      });
      this.playasList = playas.content;
      this.playas = new MatTableDataSource(this.playasList);
    });


    // CON PROMESAS

    // this._sPlaya.getPlayas().then((respuesta:any)=>{
    //   return respuesta.json();
    // }).then((playas:any)=>{
    //     // iterando el contenido de las playas [content]
    //     playas.content.forEach((playa)=>{
    //       // 'playa' => es un elemento playa
    //       // creamos 3 variables en cada iteracion (para cada playa)
    //       let total,libres,ocupados = 0;
    //       // calculamos el total del arreglo de nombre t_slotplayas de cada elemento
    //       total = playa.t_slotplayas.length;
    //       // calculamos el total de slots libre
    //       libres = playa.t_slotplayas.filter(slot=>slot.slotp_est==0).length;
    //       // calculamos el total de slots ocupados
    //       ocupados = playa.t_slotplayas.filter(slot=>slot.slotp_est==1).length;
    //       // asignando 3 nuevas propiedades al objeto playa
    //       playa.tot = total;
    //       playa.lib = libres;
    //       playa.ocu = ocupados;
    //     });
    //     this.playasList = playas.content;
    //     this.playas = new MatTableDataSource(this.playasList);
    //   }).catch(error=>console.log(error));
  }

  applyFilter(filterValue: string) {
    this.playas.filter = filterValue.trim().toLowerCase();

    if (this.playas.paginator) {
      this.playas.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscriptor.unsubscribe();
  }

}
