import { Routes } from '@angular/router';
import { ManutencaoComponent } from './components/manutencao/manutencao.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
      },

    //   {
    //     path:'',
    //     component: ManutencaoComponent
    //   }
];
