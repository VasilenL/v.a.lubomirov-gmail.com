import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Post} from './post.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(environment.endpoint + '/posts');
  }

  deletePost(id: number): Observable<any> {
    return this.httpClient.delete(environment.endpoint + '/posts/' + id);
  }
}
