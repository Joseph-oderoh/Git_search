import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInteface } from '../user-inteface';
import { UserDp } from '../user-dp';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root',
})
export class GitService {
  // Suser = "Joseph-oderoh"
  userInfo!: UserDp;
  username = 'Joseph-oderoh';

  Repo:any
  searchRepo = "gitsearch"

  BASE_URL: string = `https://api.github.com/users/`;
  constructor(private http: HttpClient) {
    // new User("", "", "" ,"",0,0,0)
  }
  getMyUsers(): Observable<UserInteface[]> {
    return this.http.get<UserInteface[]>(
      this.BASE_URL + this.username
    );
  }
  searchGithubRepo(): Observable<Repo[]> {
    return this.http.get<Repo[]>(
    this.BASE_URL + this.searchRepo + '/repos'
    );
  }
  

  changeName(userName: string) {
    this.username = userName;
  }
  changeRepo(userRepo: string) {
    this.searchRepo = userRepo;
  }


}
