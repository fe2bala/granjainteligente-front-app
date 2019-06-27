import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BaiaComponent } from './components/baia/baia.component';
import { LoginComponent } from './pages/login/login.component';
import { CriaBaiaComponent } from './pages/cria-baia/cria-baia.component';
import { BaiaDetailsComponent } from './pages/baia-details/baia-details.component';
import { EditaBaiaComponent } from './pages/edita-baia/edita-baia.component';
import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  {
    path: "", redirectTo: "/home", pathMatch: "full", canActivate: [LoggedInGuard]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "home", component: HomeComponent, canActivate: [LoggedInGuard]
  },
  {
    path: "create", component: CriaBaiaComponent, canActivate: [LoggedInGuard]
  },
  {
    path: "baiaDetails/:id", component: BaiaDetailsComponent, canActivate: [LoggedInGuard]
  },
  {
    path: "editarBaia/:id", component: EditaBaiaComponent, canActivate: [LoggedInGuard]
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:'reload'
  })],
  exports: [RouterModule],
  providers: [LoggedInGuard]
})
export class AppRoutingModule { }
