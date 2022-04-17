import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInteface } from '../user-inteface';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  BASE_URL:string = 'https://api.github.com/users/Joseph-oderoh/repos'
  constructor(private http: HttpClient) { }
getMyUsers():Observable<UserInteface[]>{
  return this.http.get<UserInteface[]>('https://api.github.com/users/Joseph-oderoh/repos')

  }
  // getRepos():Observable<UserInteface>{
  //     return this.http.get<UserInteface>('https://api.github.com/user/Joseph-oderoh/repos')
  //     }
}








































  // getMyRepo(username: string):any{
  //   const promise =  new Promise((resolve, reject) => {
  //    resolve(this.http.get(`https://api.github.com/users/${username}/repos`).toPromise()) 
  //   })
  //   return promise
  // }



