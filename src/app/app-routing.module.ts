import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PostsComponent } from './pages/posts/posts.component'
import { UsersComponent } from './pages/users/users.component'
import { SinglePostComponent } from './pages/single-post/single-post.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: SinglePostComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
