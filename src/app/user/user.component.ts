import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { UserDp } from '../user-dp';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 username!: string
 usersdetail!: any;
//  Suser!: `Joseph-oderoh`


  title = 'GIT SEARCH APP'

  constructor(private gitService: GitService) {
    this.username = `${this.gitService.username}`
    // console.log(this.username);

  }
  searchGithub() {
    this.gitService.changeName(this.username);
    this.gitService.getMyUsers().subscribe(
      user => { this.usersdetail = user
      }
    )
    
  }

  ngOnInit(): void {
    this.gitService.getMyUsers().subscribe(
      data => {
        this.usersdetail = data
        console.log(this.usersdetail);
        
      }
    )
  }

}  



















