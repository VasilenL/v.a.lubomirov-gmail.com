import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../post/post.model';
import {PostService} from '../post/post.service';

@Component({
  selector: 'app-promises-example',
  templateUrl: './promises-example.component.html',
  styleUrls: ['./promises-example.component.scss']
})
export class PromisesExampleComponent implements OnInit {

  loading = false;

  posts$: Observable<Post[]>;

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  onDelete(post: Post) {
    this.loading = true;
    this.postsService.deletePost(post.id).subscribe(() => this.loading = false);
  }

}
