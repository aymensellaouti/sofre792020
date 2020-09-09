import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/pages/cv/cv.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { DetailsCvComponent } from './cv/pages/details-cv/details-cv.component';
const routes: Routes = [
  { path: '', component: CvComponent },
  { path: 'cv/:id', component: DetailsCvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color/:color', component: ColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
