import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-post-gallery',
    templateUrl: './post-gallery.component.html',
    styleUrls: ['./post-gallery.component.css']
})
export class PostGalleryComponent implements OnInit {
  posts: Array<Post> = [];
  showPopUp: boolean = false;
  newPostPlaceholder: Post = {} as Post;
  postToEdit: Post = {} as Post;
  @Input('isEmbedded') isEmbedded: boolean;
  @Input('limit') limit: number;

  constructor(private postsService: PostsService) {
    
  }
  populatePosts() {
    this.postsService.getAll()
      .subscribe((posts) => {
        this.posts = posts;
      });
  }
  deletePost(post) {
    this.posts = this.posts.filter(obj => obj.id != post.id);
  }
  initEdit(post){
    this.postToEdit = { ...post };
    this.showPopUp = !this.showPopUp;
  }
  editPost() {
    for (var i in this.posts) {
      if (this.posts[i].id == this.postToEdit.id) {
        this.posts[i] = {} as Post;
        this.posts[i] = { ...this.postToEdit };
        break;
      }
    }
    this.clear();
    this.showPopUp = !this.showPopUp;
  }
  cancelEditPost() {
    this.clear();
    this.showPopUp = !this.showPopUp;
  }
  addNewPost() {
    
    let newPost:Post = {} as Post;
    newPost.body = this.newPostPlaceholder.body;
    newPost.title = this.newPostPlaceholder.title;
    //just random value. Not for real life
    newPost.userId = Math.floor(Math.random() * 6) + 1;
    //adding 1 + max to make it unique. In real app this field will be assigned by the db engine.
    newPost.id = Math.max(...this.posts.map(o => o.id), 0) + 1;
    this.posts.unshift(newPost);
    this.clear();
  }
  clear() {
    this.newPostPlaceholder = {} as Post;
    this.postToEdit = {} as Post;
  }
  ngOnInit(): void {
    this.populatePosts();
  }
}