import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "", component: TodoComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

/* Passing links to app.module.ts */
export const RoutingComponents = [
  TodoComponent,
  ContactComponent
];