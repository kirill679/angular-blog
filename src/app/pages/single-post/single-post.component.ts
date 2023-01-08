import { Component, OnInit } from '@angular/core'
import { PostService } from '../../services/post.service'
import { ActivatedRoute } from '@angular/router'
import { Post } from '../../models/Post'
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'
import { ModalService } from '../../services/modal.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  post: Post | undefined
  faUser = faUser
  faCalendar = faCalendar

  constructor (
    private postService: PostService, private route: ActivatedRoute,
    public modalService: ModalService, public location: Location) {
  }

  ngOnInit () {
    const postId = Number(this.route.snapshot.paramMap.get('id'))
    this.postService.getOne(postId).subscribe(post => this.post = post)
  }

  delete () {
    if (!this.post?.id) return

    this.postService.delete(this.post.id).subscribe(() => {
      this.location.back()
    })
  }
}
