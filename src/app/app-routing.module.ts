import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BaiaComponent } from './components/baia/baia.component';
import { LoginComponent } from './pages/login/login.component';
import { CriaBaiaComponent } from './pages/cria-baia/cria-baia.component';
import { BaiaDetailsComponent } from './pages/baia-details/baia-details.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/home", pathMatch: "full"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "create", component: CriaBaiaComponent
  },
  {
    path: "baiaDetails/:id", component: BaiaDetailsComponent
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
