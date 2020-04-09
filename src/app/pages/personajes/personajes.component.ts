import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, People } from 'angular2-swapi';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes$: Observable<People[]>;
  totalitems;
  fieldbuscar;
  currentPage;
  listpaginas;
  verp;
  constructor(private swapi: Angular2SwapiService) { }

  ngOnInit(): void {
    this.personajes$ = this.swapi.getPeople();
    this.fieldbuscar = '';
    this.currentPage = 1;
    this.totalitems=87;
    this.listpaginas=[];
    this.verp = 1;
    this.cargarpaginas();
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
    this.personajes$ = this.swapi.getPeople(n);
  }
  limpiar() {
    this.personajes$ = this.swapi.getPeople();
    this.fieldbuscar = '';
    this.verp = 1;
    this.currentPage = 1;
  }
  buscarpersona() {
    this.personajes$ = this.swapi.searchPeople(this.fieldbuscar);
    this.verp = 0;
  }
  getvalor(s)
  {
    let cambio = s.toString().substr(28);
    return cambio.replace('/','');
  }

}
