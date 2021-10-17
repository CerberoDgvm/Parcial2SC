import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/utilidades/nabvar/nabvar.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessiComponent } from './components/messi/messi.component';
import { jugadoresService } from './servicios/jugadores.service';
import { RonaldoComponent } from './components/ronaldo/ronaldo.component';
import { JamesComponent } from './components/james/james.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    FooterComponent,
    MessiComponent,
    NabvarComponent,
    RonaldoComponent,
    JamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [jugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
