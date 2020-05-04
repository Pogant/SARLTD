import { Component } from '@angular/core';

@Component({
  selector: 'gallery',
  template: `
    <app-photo-gallery></app-photo-gallery>
  `,
  styles: [':host { background: yellow; }']
})
export class GalleryViewComponent {
  constructor() {
    
  }
}