import {Component, NgModule} from '@angular/core';
import {ContactComponent} from './contact/contact.component';
import {DetailComponent} from './detail/detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
const routesConfig: Routes = [
  { path: 'contacts' , component: ContactComponent},
  { path: 'details/:id', component: DetailComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routesConfig), CommonModule
  ],
  declarations: [
    ContactComponent,
    DetailComponent,
    PageNotFoundComponent
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
