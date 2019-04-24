import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import { HttpComponent } from './components/http/http.component';

const routes:Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'http',
        component: HttpComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
