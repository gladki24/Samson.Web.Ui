import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then(module => module.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.module').then(module => module.WelcomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
