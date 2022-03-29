import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const apiUrl = "http://localhost:3000/post";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPots(){
    return this.http.get(apiUrl);
  }
  deletePost(id: number | string){
    return this.http.delete(`${apiUrl}/${id}`);
  }
  addPost(data: any){
    return this.http.post(apiUrl, data);
  }
}
