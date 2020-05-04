import { Component, Input } from '@angular/core';
import { Photo } from '../../models';
import { PhotosService } from '../../services';

@Component({
    selector: 'app-photo-gallery',
    templateUrl: './photo-gallery.component.html',
    styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  @Input('limit') limit: number;
  photos: Array<Photo> = [];
  constructor(private photosService: PhotosService) {
    
  }
  populatePhotos() {
    this.photosService.getAll()
      .subscribe((photos) => {
        this.photos = photos;
      });
  }
  ngOnInit(): void {
    this.populatePhotos();
  }
}