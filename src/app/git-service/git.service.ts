import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInteface } from '../user-inteface';
import { UserDp } from '../user-dp';
import { Repo } from '../repo';
import { RepoInterface } from '../repo-interface';

@Injectable({
  providedIn: 'root',
})
export class GitService {
  userInfo!: UserDp;
  username = 'Joseph-oderoh';

  Repozz!: Repo;
  searchrepo = "searchgit";
  REPO_URL:  string = `https://api.github.com/search/repositories?q=`
  BASE_URL: string = `https://api.github.com/users/`;
  constructor(private http: HttpClient) {
    // new User("", "", "" ,"",0,0,0)
  }
  
  getMyUsers(): Observable<UserInteface[]> {
    return this.http.get<UserInteface[]>(
      this.BASE_URL + this.username
    );
  }
  GithubRepos(): Observable<RepoInterface[]> {
    return this.http.get<RepoInterface[]>(
    this.BASE_URL + this.username + '/repos'
    );
  }
  
  searchGithubRepo(): Observable<RepoInterface[]> {
    return this.http.get<RepoInterface[]>(
    this.REPO_URL + this.searchrepo + ""
    );
  }

  

  changeName(userName: string) {
    this.username = userName;
  }
  changeRepo(repoName: string) {
    this.searchrepo = repoName;
  }


}
