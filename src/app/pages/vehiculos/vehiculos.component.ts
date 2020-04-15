import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Vehicle } from 'angular2-swapi';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculo$: Observable<Vehicle[]>;
  totalitems;
  fieldbuscar;
  currentPage;
  listpaginas;
  ver;
  constructor(private swapi: Angular2SwapiService,  private  http: HttpClient) { }

  ngOnInit(): void {
    this.vehiculo$ = this.swapi.getVehicles();
    this.fieldbuscar = '';
    this.currentPage = 1;
    this.http.get('https://swapi.py4e.com/api/vehicles/').subscribe((resp: any) => {   this.totalitems = parseInt(resp.count ); this.cargarpaginas();});
    this.listpaginas = [];
    this.ver = 1;
  }
  cargarpaginas()
  {
    for(let i = 1; i <= Math.ceil(this.totalitems / 10); i++)
    {
      this.listpaginas.push({n: i});
    }
    if(this.listpaginas.length === 0)
    {
      this.listpaginas = [{n: 1 }];
    }
  }
  setPage(n){
    this.currentPage = n;
    this.vehiculo$ = this.swapi.getVehicles(n);
  }
  buscarvehiculo() {
    this.vehiculo$ = this.swapi.searchVehicles(this.fieldbuscar);
    this.ver = 0;
  }

  limpiar() {
    this.vehiculo$ = this.swapi.getVehicles();
    this.fieldbuscar = '';
    this.ver = 1;
    this.currentPage = 1;
  }

  getvalor(s)
  {
    let cambio = s.toString().substr(36);
    return cambio.replace('/','');
  }

}
