import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorsComponent } from "./sensors/sensors.component";
import { SensorsEventsComponent } from "./sensors-events/sensors-events.component"
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', component: SensorsComponent },
  { path: 'sensors', component: SensorsComponent },
  { path: 'sensors/:id', component: SensorsEventsComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
