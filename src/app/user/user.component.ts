import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { User, UserInteface } from '../user-inteface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users: UserInteface[] = [
  new User("", "", "" ,"",0,0,0)
]
  title = 'GIT SEARCH APP'

  constructor(private userService: GitService) { 
    // console.log(this.users);
  }

  ngOnInit(): void {
    this.userService.getMyUsers().subscribe(
      data => {
        this.users = data
      }
    )
  }
























//   users:any;




// name = new FormControl("oderoh")
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

}
