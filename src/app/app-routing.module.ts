import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/pages/cv/cv.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { DetailsCvComponent } from './cv/pages/details-cv/details-cv.component';
import { FirstComponent } from './components/first/first.component';
import { BackComponent } from './components/back/back.component';
import { FrontComponent } from './components/front/front.component';
import { SecondComponent } from './components/second/second.component';
import { NF404Component } from './components/nf404/nf404.component';
//cv/add
const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: FirstComponent },
      { path: ':id', component: DetailsCvComponent },
    ],
  },
  {
    path: 'admin',
    component: BackComponent,
    children: [{ path: 'first', component: FirstComponent }],
  },
  {
    path: 'front',
    component: FrontComponent,
    children: [{ path: 'second', component: SecondComponent }],
  },
  { path: 'todo', component: TodoComponent },
  { path: 'color/:color', component: ColorComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
