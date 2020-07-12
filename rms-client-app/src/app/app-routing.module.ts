import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayRateComponent } from './display-rate/display-rate.component';
import { AddRateComponent } from './add-rate/add-rate.component';
import { UpdateRateComponent } from './update-rate/update-rate.component';

const routes: Routes = [
  { path: '', redirectTo: 'rate', pathMatch: 'full' },
  { path: 'rates', component: DisplayRateComponent },
  { path: 'add', component: AddRateComponent },
  { path: 'update', component: UpdateRateComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
