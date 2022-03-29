import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostComponent,
  }, {
    path: 'posts/form',
    component: PostFormComponent
  },
  {
    path: 'posts/from/:id',
    component: PostFormComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
