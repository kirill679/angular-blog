import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Post } from '../models/Post'
import { catchError, Observable, tap, throwError } from 'rxjs'
import { ErrorService } from './error.service'

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = []
  private baseUrl = 'http://localhost:5000/posts'

  constructor (private http: HttpClient, private errorService: ErrorService) {

  }

  getAll (): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl).
      pipe(
        catchError(this.errorHandler.bind(this)),
        tap(posts => {
          this.posts = posts
        }),
      )
  }

  getOne (id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.errorHandler.bind(this)),
    )
  }

  create (post: Post): Observable<Post> {
    const newPost = {
      ...post,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    return this.http.post<Post>(this.baseUrl, newPost).pipe(
      catchError(this.errorHandler.bind(this)),
      tap((post) => {
        this.posts.push(post)
      }),
    )
  }

  update (post: Post): Observable<Post> {
    const updatedPost = {
      ...post,
      updatedAt: new Date(),
    }
    return this.http.put<Post>(`${this.baseUrl}/${post.id}`, updatedPost).pipe(
      catchError(this.errorHandler.bind(this)),
    )
  }

  delete (id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.errorHandler.bind(this)),
    )
  }

  private errorHandler (error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
