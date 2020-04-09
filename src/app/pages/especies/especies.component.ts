import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Species } from 'angular2-swapi';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {
  especie$: Observable<Species[]>;
  totalitems;
  fieldbuscar;
  currentPage;
  listpaginas;
  ver;

  constructor(private swapi: Angular2SwapiService) { }

  ngOnInit(): void {
    this.especie$ = this.swapi.getSpecies();
    this.fieldbuscar = '';
    this.currentPage = 1;
    this.totalitems = 37;
    this.listpaginas = [];
    this.cargarpaginas();
    this.ver= 1;
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
    this.especie$ = this.swapi.getSpecies(n);
  }
  buscarespecie() {
    this.especie$ = this.swapi.searchSpecies(this.fieldbuscar);
    this.ver= 0;
  }

  limpiar() {
    this.especie$ = this.swapi.getSpecies();
    this.fieldbuscar = '';
    this.ver=1;
    this.currentPage = 1;
  }

  getvalor(s)
  {
    let cambio = s.toString().substr(29);
    return cambio.replace('/','');
  }
}
