import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/pages/cv/cv.component';
import { TodoComponent } from './components/todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: '', component: CvComponent },
  { path: 'color', component: ColorComponent },
  //cv   cv/add
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
