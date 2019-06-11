import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BaiaComponent } from './components/baia/baia.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TemperaturaCardComponent } from './components/temperatura-card/temperatura-card.component';
import { AguaCardComponent } from './components/agua-card/agua-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaiaComponent,
    SidebarComponent,
    TemperaturaCardComponent,
    AguaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
