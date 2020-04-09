import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Planet } from 'angular2-swapi';

@Component({
  selector: 'app-verplaneta',
  templateUrl: './verplaneta.component.html',
  styleUrls: ['./verplaneta.component.css']
})
export class VerplanetaComponent implements OnInit {
  id;
  planeta$: Observable<Planet>;
  seleccionado;
  seltexto;
  constructor(private route: ActivatedRoute , private  swapi: Angular2SwapiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.planeta$ = this.swapi.getPlanet(this.id);
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
