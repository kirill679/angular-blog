import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PostService } from '../../services/post.service'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
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
    private postService: PostService, private modalService: ModalService) {
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

  submit () {
    if (!this.form.valid) return

    this.postService.create({
      title: this.form.value.title as string,
      body: this.form.value.body as string,
      image: this.form.value.image as string,
      author: this.form.value.author as string,
    }).subscribe(() => {
      this.modalService.close()
    })
  }
}
