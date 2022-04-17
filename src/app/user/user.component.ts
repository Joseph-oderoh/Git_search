import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { User, UserInteface } from '../user-inteface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 username!: string
 users!: any
// users: any[] = [

//   new User("", "", "" ,"",0,0,0)
// ]

  title = 'GIT SEARCH APP'

  constructor(private gitService: GitService) {
    this.username = `${this.gitService.Suser}`
    console.log(this.username);

  }
  searchGithub() {
    this.gitService.updateName(this.username);
    this.gitService.getMyUsers().subscribe(
      user => { this.users = user }
    )
  }

  ngOnInit(): void {
    this.gitService.getMyUsers().subscribe(
      data => {
        this.users = data
      }
    )
  }

}  




















//   users:any;

//   constructor(private gitService:GitService) { }


  // mySubscription: Subscription =  new Subscription 
  // ngOnDestroy(): void {
  //   this.mySubscription.unsubscribe();
  // }

  // ngOnInit(): void {
    // this.getReposWithPromise()
//}

//   async getReposWithPromise():Promise<void>{
//     const users = await this.gitService.getMyRepo('Joseph-oderoh')
//    this.users = users
  
   
//   }

