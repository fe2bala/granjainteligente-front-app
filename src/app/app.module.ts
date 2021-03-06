import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BaiaComponent } from './components/baia/baia.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TemperaturaCardComponent } from './components/temperatura-card/temperatura-card.component';
import { AguaCardComponent } from './components/agua-card/agua-card.component';
import { ComidaCardComponent } from './components/comida-card/comida-card.component';
import { IluminacaoCardComponent } from './components/iluminacao-card/iluminacao-card.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaiaDetailsComponent } from './pages/baia-details/baia-details.component';
import { BaiaItemComponent } from './components/baia-item/baia-item.component';
import { LoginComponent } from './pages/login/login.component';
import { CriaBaiaComponent } from './pages/cria-baia/cria-baia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditaBaiaComponent } from './pages/edita-baia/edita-baia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaiaComponent,
    SidebarComponent,
    TemperaturaCardComponent,
    AguaCardComponent,
    ComidaCardComponent,
    IluminacaoCardComponent,
    PageNotFoundComponent,
    FooterComponent,
    BaiaDetailsComponent,
    BaiaItemComponent,
    LoginComponent,
    CriaBaiaComponent,
    EditaBaiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
