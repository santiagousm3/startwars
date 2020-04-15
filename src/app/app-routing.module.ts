import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [{path: 'inicio', component: MenuComponent, pathMatch: 'full'},
{path: 'inicio/peliculas', component: PeliculasComponent},
{path: 'inicio/personajes', component: PersonajesComponent},
{path: 'inicio/planetas', component: PlanetasComponent},
{path: 'inicio/especies', component: EspeciesComponent},
{path: 'inicio/vehiculos', component: VehiculosComponent},
{path: 'inicio/naves', component: NavesComponent},
{path: 'inicio/peliculas/verpelicula/:id', component: VerpeliculaComponent},
{path: 'inicio/personajes/verpersonaje/:id', component: VerpersonajeComponent},
{path: 'inicio/planetas/verplaneta/:id', component: VerplanetaComponent},
{path: 'inicio/especies/verespecie/:id', component: VerespecieComponent},
{path: 'inicio/vehiculos/vervehiculo/:id', component: VervehiculoComponent},
{path: 'inicio/naves/vernave/:id', component: VernaveComponent},
{path: '**', pathMatch: 'full', redirectTo: 'inicio'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
