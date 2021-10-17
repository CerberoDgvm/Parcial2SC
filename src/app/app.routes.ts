import { RouterModule, Routes } from "@angular/router";
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { MessiComponent} from './components/messi/messi.component';
import { RonaldoComponent } from "./components/ronaldo/ronaldo.component";
import { JamesComponent } from "./components/james/james.component";
import { FooterComponent } from "./components/footer/footer.component";


const APP_ROUTES:Routes=[
    {path: 'JugadoresComponent',component:JugadoresComponent},
    {path: 'Messi',component:MessiComponent},
    {path: 'Ronaldo',component:RonaldoComponent},
    {path: 'James',component:JamesComponent},
    {path: '**', pathMatch: 'full',redirectTo:'JugadoresComponent'},
    ];
    

 export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);