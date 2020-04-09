import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Species } from 'angular2-swapi';

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
  constructor(private route: ActivatedRoute , private  swapi: Angular2SwapiService) {
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.especie$ = this.swapi.getSpeciesById(this.id);
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
