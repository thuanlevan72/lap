import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

   constructor(private postService: PostService) { }
  posts: any;
  ngOnInit(): void {
    this.postService.getPots().subscribe((data)=>{
      console.log(data);
      this.posts = data;
      console.log(this.posts)
    })
  }
  dle(id: number | string): void {
    console.log(id)
    this.postService.deletePost(id).subscribe((data)=>{
      this.ngOnInit();
     })
  }

}
