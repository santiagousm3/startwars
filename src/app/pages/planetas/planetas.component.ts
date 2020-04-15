import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Planet } from 'angular2-swapi';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planet$: Observable<Planet[]>;
  totalitems;
  fieldbuscar;
  currentPage;
  listpaginas;
  ver;
  constructor(private swapi: Angular2SwapiService, private  http: HttpClient) { }

  ngOnInit(): void {
    this.planet$ = this.swapi.getPlanets();
    this.fieldbuscar = '';
    this.currentPage = 1;
    this.http.get('https://swapi.py4e.com/api/planets/').subscribe((resp: any) => {   this.totalitems = parseInt(resp.count );this.cargarpaginas(); });
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
    this.planet$ = this.swapi.getPlanets(n);
  }
  buscarplaneta() {
    this.planet$ = this.swapi.searchPlanets(this.fieldbuscar);
    this.ver = 0;
  }

  limpiar() {
    this.planet$ = this.swapi.getPlanets();
    this.fieldbuscar = '';
    this.ver = 1;
    this.currentPage = 1;
  }

  getvalor(s)
  {
    let cambio = s.toString().substr(35);
    return cambio.replace('/','');
  }
}
