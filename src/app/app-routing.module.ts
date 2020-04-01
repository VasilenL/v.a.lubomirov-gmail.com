import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {LayoutWithComponentsComponent} from './layout-with-components/layout-with-components.component';
import {LayoutPartiallyRewrittenComponent} from './layout-partially-rewritten/layout-partially-rewritten.component';
import {DiscountInstagramComponent} from './discount-instagram/discount-instagram.component';
import {ExamplesComponent} from './examples/examples.component';
import {PostsComponent} from './posts/posts.component';
import {ParentComponent} from './parent/parent.component';

const routes: Routes = [
  {path: '', redirectTo: '/layout', pathMatch: 'full'},
  {path: 'layout', component: LayoutComponent},
  {path: 'examples', component: ExamplesComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'discount-instagram', component: DiscountInstagramComponent},
  {path: 'input-output', component: ParentComponent},
  {path: 'layout-with-components', component: LayoutWithComponentsComponent},
  {path: 'layout-partially-rewritten', component: LayoutPartiallyRewrittenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
