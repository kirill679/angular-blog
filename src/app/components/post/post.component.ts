import { Component, Input } from '@angular/core'
import { Post } from '../../models/Post'
import { faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post: Post

  faUser = faUser
}
