import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GitService } from '../git-service/git.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any = [];
title = 'GIT SEARCH APP'

name = new FormControl()
  constructor(private gitService:GitService) { }


  mySubscription: Subscription =  new Subscription 
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log(this.getReposWithPromise())
  }

  async getReposWithPromise():Promise<void>{
    const users = await this.gitService.getMyRepo('Joseph-oderoh')
   this.users = users
   console.log(this.users);
   
  }

}
