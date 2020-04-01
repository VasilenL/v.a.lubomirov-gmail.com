import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule, ClrInputModule} from '@clr/angular';
import { LayoutComponent } from './layout/layout.component';
import { LayoutWithComponentsComponent } from './layout-with-components/layout-with-components.component';
import { InitialHeaderComponent } from './layout-with-components/initial-header/initial-header.component';
import { InitialProfileSectionComponent } from './layout-with-components/initial-profile-section/initial-profile-section.component';
import { InitialHighlightsComponent } from './layout-with-components/initial-highlights/initial-highlights.component';
import { InitialPhotosComponent } from './layout-with-components/initial-photos/initial-photos.component';
import { LayoutPartiallyRewrittenComponent } from './layout-partially-rewritten/layout-partially-rewritten.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { DiscountInstagramComponent } from './discount-instagram/discount-instagram.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { PhotosComponent } from './photos/photos.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutWithComponentsComponent,
    InitialHeaderComponent,
    InitialProfileSectionComponent,
    InitialHighlightsComponent,
    InitialPhotosComponent,
    LayoutPartiallyRewrittenComponent,
    HeaderComponent,
    ProfileSectionComponent,
    DiscountInstagramComponent,
    HighlightsComponent,
    PhotosComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    ClrInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
