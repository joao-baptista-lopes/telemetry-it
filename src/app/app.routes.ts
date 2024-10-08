import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
      },

      {
        path:'contactos',
        loadChildren: () => import('./modules/contacto/contacto.module').then(m => m.ContactoModule)
      },
      {
        path:'servicos',
        loadChildren: () => import('./modules/servicos/servicos.module').then(m => m.ServicosModule)
      }

    //   {
    //     path:'',
    //     component: ManutencaoComponent
    //   }
];
