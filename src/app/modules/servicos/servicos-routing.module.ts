import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicosEspecificoComponent } from './components/servicos-especifico/servicos-especifico.component';

const routes: Routes = [
  {
    path:'',
    component: ServicosEspecificoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
