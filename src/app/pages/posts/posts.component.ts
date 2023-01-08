import { Component, OnInit } from '@angular/core'
import { PostService } from '../../services/post.service'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  search = ''
  isLoading = false
  faPlus = faPlus

  constructor (
    public postService: PostService, public modalService: ModalService) {}

  ngOnInit (): void {
    this.isLoading = true

    this.postService.getAll().subscribe(() => {
      this.isLoading = false
    })

  }
}
