import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Species } from 'angular2-swapi';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-verespecie',
  templateUrl: './verespecie.component.html',
  styleUrls: ['./verespecie.component.css']
})
export class VerespecieComponent implements OnInit {
  id;
  especie$: Observable<Species>;
  seleccionado;
  seltexto;
  nombreplaneta;
  constructor(private route: ActivatedRoute , private  swapi: Angular2SwapiService, private  http: HttpClient) {
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.especie$ = this.swapi.getSpeciesById(this.id);
    this.nombreplaneta = '';
    this.http.get('https://swapi.py4e.com/api/species/' + this.id ).subscribe(res => this.cargarnombre(res['homeworld']));
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
