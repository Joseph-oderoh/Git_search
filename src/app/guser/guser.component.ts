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
  users = [];
  constructor(private gitService:GitService) { 
    new User()
  }

  mySubscription: Subscription =  new Subscription 
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }


 


  ngOnInit(): void {
    this.getReposWithPromise() 
  }
  
   getReposWithPromise():void{
    this.gitService.getMy('Joseph-oderoh').then((users:any) =>{
      console.log(users);
      
    })
   }
 
}
