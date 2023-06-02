import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciaSessioRecusDiazComponent } from "./pages/inicia-sessio-recus-diaz/inicia-sessio-recus-diaz.component";
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'isessioDiaz', component:IniciaSessioRecusDiazComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
