import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Starship} from 'angular2-swapi';

@Component({
  selector: 'app-vernave',
  templateUrl: './vernave.component.html',
  styleUrls: ['./vernave.component.css']
})
export class VernaveComponent implements OnInit {
  id;
  nave$: Observable<Starship>;
  seleccionado;
  seltexto;
  constructor(private route: ActivatedRoute , private  swapi: Angular2SwapiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.nave$ = this.swapi.getStarship(this.id);
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
