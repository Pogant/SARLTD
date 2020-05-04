import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  template: `
    <app-post-gallery></app-post-gallery>
  `,
  styles: [':host { background: green; }']
})
export class PostsViewComponent {
  constructor() {
    
  }
}