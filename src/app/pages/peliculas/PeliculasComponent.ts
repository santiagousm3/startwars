import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { HttpClient} from '@angular/common/http';

// tslint:disable-next-line: use-pipe-transform-interface
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent implements OnInit {
/****Se crean las variables a utilizar */
  film$: Observable<Film[]>;
  peliculas: Observable<Film[]>;
  fieldbuscar;
  totalitems;
  currentPage;
  listpaginas;
  constructor(private swapi: Angular2SwapiService, private  http: HttpClient) {
  }
  ngOnInit(): void {
     /****Se inicializan las variables a utilizar */
     // tslint:disable-next-line: radix
     this.http.get('https://swapi.py4e.com/api/films/').subscribe((resp: any) => {   this.totalitems = parseInt( resp.count );  this.cargarpaginas();});
     this.film$ = this.swapi.getFilms();
     this.peliculas = this.film$;
     this.fieldbuscar = '';
     this.currentPage = 1;
     this.listpaginas = [];
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
    /****asigna una ubicación de pagina */
  setPage(n){
    this.currentPage = n;
    this.film$ = this.swapi.getFilms();
  }
  /*************************Busca en la lista la pelicula por nombre o año */
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
 /****Extrae solo el id de la url */
  getvalor(s)
  {
    let cambio = s.toString().substr(33);
    return cambio.replace('/','');
  }

}
