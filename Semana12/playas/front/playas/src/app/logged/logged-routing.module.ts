import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const routes:Routes = [
    {
        path: '',
        component: ToolbarComponent
    }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
