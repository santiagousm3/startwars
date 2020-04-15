import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Angular2SwapiService, People } from 'angular2-swapi';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

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
  nombreplaneta;
  constructor(private route: ActivatedRoute , private  swapi: Angular2SwapiService, private  http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.personaje$ = this.swapi.getPeopleById(this.id);
    this.nombreplaneta='';
    this.http.get('https://swapi.py4e.com/api/people/' + this.id ).subscribe(res => this.cargarnombre(res['homeworld']));
    this.seleccionado = 10;
    this.seltexto = '';
  }
  
  cargarnombre(u)
  {
    this.http.get('https://swapi.py4e.com/api/planets/' + u.toString().substr(35).replace('/',''))
    .subscribe(res => { this.nombreplaneta = res['name']; });
  }
  getvalor(s,n)
  {
    let cambio = s.toString().substr(n);
    cambio= cambio.replace('/','');
    return  cambio;
  }

}
