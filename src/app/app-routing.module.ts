import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { PeliculasComponent } from "./pages/peliculas/peliculas.component";


const routes: Routes = [{path: '', component: MenuComponent},
{path: 'peliculas', component: PeliculasComponent},
{path: '**', pathMatch: 'full', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
