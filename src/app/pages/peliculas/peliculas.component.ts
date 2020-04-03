import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film } from 'angular2-swapi';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  film$: Observable<Film[]>;
  constructor(private swapi: Angular2SwapiService) {}

  ngOnInit(): void {
    this.film$ = this.swapi.getFilms();
  }
}


