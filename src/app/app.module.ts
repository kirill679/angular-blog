import { LOCALE_ID, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PostsComponent } from './pages/posts/posts.component'
import { UsersComponent } from './pages/users/users.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { PostComponent } from './components/post/post.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SpinnerComponent } from './components/spinner/spinner.component'
import { ButtonComponent } from './components/button/button.component'
import {
  GlobalErrorComponent,
} from './components/global-error/global-error.component'
import { FilterPostsPipe } from './pipes/filter-posts.pipe'
import { AddPostComponent } from './components/add-post/add-post.component'
import { ModalComponent } from './components/modal/modal.component'
import { SinglePostComponent } from './pages/single-post/single-post.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { registerLocaleData } from '@angular/common'
import localeRu from '@angular/common/locales/ru'
import {
  UpdatePostComponent,
} from './components/update-post/update-post.component'

registerLocaleData(localeRu)

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    NavbarComponent,
    PostComponent,
    SpinnerComponent,
    ButtonComponent,
    GlobalErrorComponent,
    FilterPostsPipe,
    AddPostComponent,
    ModalComponent,
    SinglePostComponent,
    NotFoundComponent,
    UpdatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
