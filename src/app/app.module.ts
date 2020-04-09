import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2SwapiModule } from 'angular2-swapi';
import { FormsModule } from '@angular/forms';
//Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PeliculasComponent } from './pages/peliculas/PeliculasComponent';
import { VerpeliculaComponent } from './pages/peliculas/verpelicula/verpelicula.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { VerpersonajeComponent } from './pages/personajes/verpersonaje/verpersonaje.component';
import { PlanetasComponent } from './pages/planetas/planetas.component';
import { VerplanetaComponent } from './pages/planetas/verplaneta/verplaneta.component';
import { EspeciesComponent } from './pages/especies/especies.component';
import { VerespecieComponent } from './pages/especies/verespecie/verespecie.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { VervehiculoComponent } from './pages/vehiculos/vervehiculo/vervehiculo.component';
import { NavesComponent } from './pages/naves/naves.component';
import { VernaveComponent } from './pages/naves/vernave/vernave.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PeliculasComponent,
    VerpeliculaComponent,
    PersonajesComponent,
    VerpersonajeComponent,
    PlanetasComponent,
    VerplanetaComponent,
    EspeciesComponent,
    VerespecieComponent,
    VehiculosComponent,
    VervehiculoComponent,
    NavesComponent,
    VernaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2SwapiModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
