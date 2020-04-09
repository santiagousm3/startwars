import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Angular2SwapiService, People } from 'angular2-swapi';

@Component({
  selector: 'app-verpersonaje',
  templateUrl: './verpersonaje.component.html',
  styleUrls: ['./verpersonaje.component.css']
})
export class VerpersonajeComponent implements OnInit {
  id;
  personaje$: Observable<People>;
  seleccionado;
  seltexto;
  constructor(private route: ActivatedRoute , private  swapi: Angular2SwapiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.personaje$ = this.swapi.getPeopleById(this.id);
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
