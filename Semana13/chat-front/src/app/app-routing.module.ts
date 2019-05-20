import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SalitaComponent } from './components/salita/salita.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'salita',
        component: SalitaComponent,
        canActivate: [AuthService]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
