import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Photo } from '../models/';
import { map } from 'rxjs/operators';


@Injectable()
export class PhotosService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<Photo[]> {
    return this.apiService.get(`/photos`)
      .pipe(map(data => data));
  }

}