import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import { HttpComponent } from './components/http/http.component';
import { FormsComponent } from './components/forms/forms.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { DatatablesComponent } from './components/datatables/datatables.component';

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
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    },
    {
        path: 'firebase',
        component: FirebaseComponent
    },
    {
        path: 'datatables',
        component: DatatablesComponent
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
