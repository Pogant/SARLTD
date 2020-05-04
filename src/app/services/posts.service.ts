import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Post } from '../models/';
import { map } from 'rxjs/operators';


@Injectable()
export class PostsService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<Post[]> {
    return this.apiService.get(`/posts`)
      .pipe(map(data => data));
  }

}