import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { PropinaComponent } from './propina/propina.component';

export const routes: Routes = [
    {path:"", component: HomeComponent },
    {path:"login", component: LoginComponent },
    {path:"nav", component:CabecalhoComponent},
    {path:"menu", component: RodapeComponent},
    {path:"estudantes", component: EstudantesComponent },
    {path:"pagamento", component: PropinaComponent}
];
