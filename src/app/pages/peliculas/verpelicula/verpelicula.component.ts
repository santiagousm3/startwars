import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film } from 'angular2-swapi';

@Component({
  selector: 'app-verpelicula',
  templateUrl: './verpelicula.component.html',
  styleUrls: ['./verpelicula.component.css']
})
export class VerpeliculaComponent implements OnInit {
id;
film$: Observable<Film>;
seleccionado;
seltexto;

  constructor(private route: ActivatedRoute , private  swapi: Angular2SwapiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.film$ = this.swapi.getFilm(this.id);
    this.seleccionado = 10;
    this.seltexto = '';
  }
  getvalor(s,n)
  {
    let cambio = s.toString().substr(n);
    cambio= cambio.replace('/','');
    return  cambio;
  }

}


