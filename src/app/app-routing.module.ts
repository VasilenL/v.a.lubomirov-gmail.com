import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {LayoutWithComponentsComponent} from './layout-with-components/layout-with-components.component';
import {LayoutPartiallyRewrittenComponent} from './layout-partially-rewritten/layout-partially-rewritten.component';
import {DiscountInstagramComponent} from './discount-instagram/discount-instagram.component';
import {ExamplesComponent} from './examples/examples.component';
import {PostComponent} from './post/post.component';
import {ParentComponent} from './parent/parent.component';
import {ObservableExampleComponent} from './observable-example/observable-example.component';
import {PromisesExampleComponent} from './promises-example/promises-example.component';
import {HomeworkComponent} from './homework/homework.component';

const routes: Routes = [
  {path: '', redirectTo: '/layout', pathMatch: 'full'},
  {path: 'layout', component: LayoutComponent},
  {path: 'examples', component: ExamplesComponent},
  {path: 'homework', component: HomeworkComponent},
  {path: 'discount-instagram', component: DiscountInstagramComponent},
  {path: 'input-output', component: ParentComponent},
  {path: 'layout-with-components', component: LayoutWithComponentsComponent},
  {path: 'layout-partially-rewritten', component: LayoutPartiallyRewrittenComponent},
  {path: 'promises-example', component: PromisesExampleComponent},
  {path: 'observable-example', component: ObservableExampleComponent},
  {path: 'subject-example', component: ObservableExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
