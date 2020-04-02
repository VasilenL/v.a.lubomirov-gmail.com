import { Component, OnInit } from '@angular/core';
import {PostService} from '../post/post.service';
import {Observable} from 'rxjs';
import {Post} from '../post/post.model';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit {

  postsState$: Observable<Post[]>;

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.postsState$ = this.postsService.getPostsState();
  }

}
