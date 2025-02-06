import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchComponent } from './watch/watch.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [{path:':id', component:WatchComponent},{path:'editor/edit', component:EditorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
