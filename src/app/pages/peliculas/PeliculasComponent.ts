import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Angular2SwapiService, Film } from 'angular2-swapi';

// tslint:disable-next-line: use-pipe-transform-interface
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent implements OnInit {

  film$: Observable<Film[]>;
  peliculas: Observable<Film[]>;
  fieldbuscar;
  currentPage;
  listpaginas;
  constructor(private swapi: Angular2SwapiService) {
  }
  ngOnInit(): void {
    this.film$ = this.swapi.getFilms(); this.peliculas = this.film$;
    this.fieldbuscar = '';
    this.currentPage = 1;
    this.listpaginas = [{n: 1 }];
  }

  setPage(n){
    this.currentPage = n;
    this.film$ = this.swapi.getFilms();
  }
  getProjectByName(bsc) {
    return this.peliculas
      .pipe(map(projects => projects.filter(proj => (new Date(proj.release_date).getFullYear().toString().indexOf(bsc) > -1)
      || proj.title.toLowerCase().indexOf(bsc.toLowerCase()) > -1)));
  }
  buscarpelicula() {
    this.film$ = this.getProjectByName(this.fieldbuscar);
  }

  limpiar() {
    this.film$ = this.swapi.getFilms();
    this.peliculas = this.film$;
    this.fieldbuscar = '';
  }

  getvalor(s)
  {
    let cambio = s.toString().substr(27);
    return cambio.replace('/','');
  }

}
