import { Component, OnInit } from '@angular/core';
import {PostService} from '../post/post.service';

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.scss']
})
export class SubjectExampleComponent implements OnInit {

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
  }

  destroyState() {
    this.postsService.destroyPostsState();
  }
}
