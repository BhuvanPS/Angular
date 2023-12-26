import { Routes,RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ProfileComponent } from './profile/profile.component';
import { RobotComponent } from './robot/robot.component';
import { EventhandlingComponent } from './eventhandling/eventhandling.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"greetings",component:GreetingComponent},
    {path:"greetings/today",component:RobotComponent},
    {path:"greetings/today/1",component:EventhandlingComponent},
    {path:"**",component:ProfileComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }