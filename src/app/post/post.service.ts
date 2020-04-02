import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Post} from './post.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsState$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(environment.endpoint + '/posts')
      .pipe(tap((posts: Post[]) => {
        console.log(posts);
        this.postsState$.next(posts);
      }));
  }

  getPostsState(): Observable<Post[]> {
    return this.postsState$.asObservable();
  }

  getPostsStateAsSubject(): BehaviorSubject<Post[]> {
    return this.postsState$;
  }

  destroyPostsState() {
    this.postsState$.next([]);
  }

  deletePost(id: number): Observable<any> {
    return this.httpClient.delete(environment.endpoint + '/posts/' + id);
  }
}
