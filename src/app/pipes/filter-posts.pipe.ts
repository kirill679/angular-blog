import { Pipe, PipeTransform } from '@angular/core'
import { Post } from '../models/Post'

@Pipe({
  name: 'filterPosts',
})
export class FilterPostsPipe implements PipeTransform {

  transform (posts: Post[], search: string): Post[] {
    if (search.length === 0) { return posts }
    const searchString = search.toLowerCase()
    return posts.filter(p => {
      const title = p.title.toLowerCase()
      const body = p.body.toLowerCase()
      const authorName = p.author.toLowerCase()

      return title.includes(searchString) ||
        body.includes(searchString) ||
        authorName.includes(searchString)
    })
  }

}
