import { Component, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Post } from '../../models/Post'
import { PostService } from '../../services/post.service'
import { ModalService } from '../../services/modal.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  @Input() post: Post

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    body: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    image: new FormControl<string>(''),
    author: new FormControl<string>('', [
      Validators.required,
    ]),
  })

  constructor (
    private postService: PostService, private modalService: ModalService,
    private router: Router) {
  }

  get title () {
    return this.form.controls.title as FormControl
  }

  get body () {
    return this.form.controls.body as FormControl
  }

  get author () {
    return this.form.controls.author as FormControl
  }

  ngOnInit () {
    this.form.setValue({
      title: this.post.title,
      author: this.post.author,
      body: this.post.body,
      image: this.post.image,
    })
  }

  submit () {
    if (!this.form.valid) return

    this.postService.update({
      author: this.form.value.author as string,
      body: this.form.value.body as string,
      createdAt: this.post.createdAt,
      id: this.post.id,
      image: this.form.value.image as string,
      title: this.form.value.title as string,
    }).subscribe(() => {
      this.modalService.close()
      this.router.navigateByUrl('/', { skipLocationChange: true }).
        then(() => this.router.navigate(['/posts/' + this.post.id]))
    })
  }
}
