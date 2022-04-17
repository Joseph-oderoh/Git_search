import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserInteface } from '../user-inteface';

@Injectable({
  providedIn: 'root'
})
export class GitService {
Suser = "Joseph-oderoh"
users!: User
  username = "Joseph-oderoh"

  BASE_URL:string = `https://api.github.com/users/${this.username}`
  constructor(private http: HttpClient) {
    new User("", "", "" ,"",0,0,0)
   }
getMyUsers():Observable<UserInteface[]>{
  return this.http.get<UserInteface[]>('https://api.github.com/users/Joseph-oderoh/repos')
}
searchGithubRepo(): Observable<UserInteface> {
  return this.http.get<UserInteface>('https://api.github.com/users/Joseph-oderoh/repos');
}

updateName(userName: string) {
  this.Suser = userName;
  }

// username = "Joseph-oderoh"
//   BASE_URL:string = `https://api.github.com/users/${this.username}`
//   constructor(private http: HttpClient) { }
// getMyUsers():Observable<any>{
//   return this.http.get<any>(this.BASE_URL)

//   }
  // getRepos():Observable<UserInteface>{
  //     return this.http.get<UserInteface>('https://api.github.com/user/Joseph-oderoh/repos')
  //     }




































  // getMyRepo(username: string):any{
  //   const promise =  new Promise((resolve, reject) => {
  //    resolve(this.http.get(`https://api.github.com/users/${username}/repos`).toPromise()) 
  //   })
  //   return promise
  // }

}

