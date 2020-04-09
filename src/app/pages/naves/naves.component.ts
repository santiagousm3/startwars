import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Starship } from 'angular2-swapi';

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
  constructor(private swapi: Angular2SwapiService) { }

  ngOnInit(): void {
  this.naves$ = this.swapi.getStarships();
  this.fieldbuscar = '';
  this.currentPage = 1;
  this.totalitems = 37;
  this.listpaginas = [];
  this.cargarpaginas();
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

  getvalor(s)
  {
    let cambio = s.toString().substr(31);
    return cambio.replace('/','');
  }

}
