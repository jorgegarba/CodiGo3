import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SalitaComponent } from './components/salita/salita.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'salita',
        component: SalitaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
