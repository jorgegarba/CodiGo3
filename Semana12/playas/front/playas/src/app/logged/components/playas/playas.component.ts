import { Component, OnInit, ViewChild} from '@angular/core';
import { PlayaService } from '../../services/playa.service';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';


const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css']
})
export class PlayasComponent implements OnInit {

  playasList:any;

  paginator;
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

  constructor(private _sPlaya:PlayaService) { }

  ngOnInit() {
    this.setPlayasList();
  }

  setPlayasList(){
    this._sPlaya.getPlayas().subscribe((playas:any)=>{
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
  }

  applyFilter(filterValue: string) {
    this.playas.filter = filterValue.trim().toLowerCase();

    if (this.playas.paginator) {
      this.playas.paginator.firstPage();
    }
  }

}
