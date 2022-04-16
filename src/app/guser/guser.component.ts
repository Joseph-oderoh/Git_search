import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';
import { User } from '../user-class/user';

@Component({
  selector: 'app-guser',
  templateUrl: './guser.component.html',
  styleUrls: ['./guser.component.css']
})
export class GuserComponent implements OnInit {
  title = 'Git_search';
  users!: User;
  mySubscription: Subscription =  new Subscription 
  
 
  constructor(private gitService:GitService) { 
    new User ('','')
  }

  ngOnInit(): void {
    this.mySubscription.add(
    this.gitService.getMyRepo('Joseph-oderoh').subscribe((repos) => console.log(repos))
    )
  }

}
