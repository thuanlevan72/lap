import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  potsForm: FormGroup;
  constructor(private router: Router,private postService: PostService, private ActivatedRoute: ActivatedRoute) { 
    this.potsForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', [Validators.required,Validators.minLength(6)]),
      status: new FormControl(0),
    });
  }
  newPost = {
    id: 0,
    title: "",
    content : "",
    status: 0
  }
  ngOnInit(): void {
  }
  onSubmit(data: any){
    console.log(this.potsForm.value);
    return this.postService.addPost(this.potsForm.value).subscribe(data=>{
      this.router.navigate(['/posts']);
    })
  }


}
