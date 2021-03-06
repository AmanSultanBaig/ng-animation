import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'Contact', component: ContactComponent , data: {animation: 'Contact'}},
  {path:'About', component: AboutComponent, data: {animation: 'About'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutes = [ContactComponent , AboutComponent]
