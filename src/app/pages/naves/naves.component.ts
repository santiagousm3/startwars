import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Starship } from 'angular2-swapi';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {
  naves$: Observable<Starship[]>;
  totalitems;
  fieldbuscar;
  currentPage;
  listpaginas;
  ver;
  constructor(private swapi: Angular2SwapiService, private  http: HttpClient) { }

  ngOnInit(): void {
    /****Se crean las variables a utilizar */
  this.naves$ = this.swapi.getStarships();
  this.fieldbuscar = '';
  this.currentPage = 1;
  // tslint:disable-next-line: radix
  this.http.get('https://swapi.py4e.com/api/starships/').subscribe((resp: any) => {   this.totalitems = parseInt(resp.count ); this.cargarpaginas(); });
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
    this.naves$ = this.swapi.getStarships(n);
  }
  buscarnave() {
    this.naves$ = this.swapi.searchStarships(this.fieldbuscar);
    this.ver = 0;
  }

  limpiar() {
    this.naves$ = this.swapi.getStarships();
    this.fieldbuscar = '';
    this.ver = 1;
    this.currentPage = 1;
  }
  /****Extrae solo el id de la url */
  getvalor(s)
  {
    let cambio = s.toString().substr(37);
    return cambio.replace('/','');
  }

}
