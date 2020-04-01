import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';
import {Observable} from 'rxjs';
import {Post} from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  loading = false;

  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

  onEdit(post: Post) {

  }

  onDelete(post: Post) {
    this.loading = true;

    this.postsService.deletePost(post.id).subscribe(() => this.loading = false);
  }
}
