import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryViewComponent } from './views/gallery/gallery.component';
import { HomeViewComponent } from './views/home/home.component';
import { PostsViewComponent } from './views/posts/posts.component';
import { ContactUsViewComponent } from './views/contactus/contactus.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [];

@NgModule({
  declarations: [
    GalleryViewComponent,
    HomeViewComponent,
    PostsViewComponent,
    ContactUsViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeViewComponent },
      { path: 'posts', component: PostsViewComponent },
      { path: 'gallery', component: GalleryViewComponent },
      { path: 'contactus', component: ContactUsViewComponent },
      { path: '**', redirectTo: 'home' }
    ]),
    SharedModule
  ],
  exports: [
    RouterModule, 
    GalleryViewComponent,
    HomeViewComponent,
    PostsViewComponent,
    ContactUsViewComponent
  ]
})
export class AppRoutingModule { }
