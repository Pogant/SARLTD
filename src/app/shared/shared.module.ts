import { CommonModule, formatNumber } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostGalleryComponent } from './post-gallery/post-gallery.component'
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ContactLibModule } from 'contact-lib';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ScrollingModule,
    ContactLibModule,
    FormsModule
  ],
  declarations: [
    PostGalleryComponent,
    PhotoGalleryComponent,
  ],
  exports: [
    CommonModule,
    PostGalleryComponent,
    PhotoGalleryComponent,
    HttpClientModule,
    ScrollingModule,
    ContactLibModule,
    FormsModule,
  ]
})
export class SharedModule {}
