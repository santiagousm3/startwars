import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Vehicle} from 'angular2-swapi';

@Component({
  selector: 'app-vervehiculo',
  templateUrl: './vervehiculo.component.html',
  styleUrls: ['./vervehiculo.component.css']
})
export class VervehiculoComponent implements OnInit {
  id;
  vehiculo$: Observable<Vehicle>;
  seleccionado;
  seltexto;
  constructor(private route: ActivatedRoute , private  swapi: Angular2SwapiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.vehiculo$ = this.swapi.getVehicle(this.id);
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
