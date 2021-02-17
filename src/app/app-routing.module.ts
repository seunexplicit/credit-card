import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCardComponent } from './component/create-card/create-card.component';
import { CardDisplayPageComponent } from './component/card-display-page/card-display-page.component';

const routes: Routes = [
	{path:'create-card', component:CreateCardComponent},
	{path:'', component:CardDisplayPageComponent, pathMatch:'full'},
	{path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
