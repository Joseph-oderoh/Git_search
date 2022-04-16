import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  getMyRepo(username: string){
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}
