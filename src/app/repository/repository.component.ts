import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  reponame: any;
  Repo: any;

  constructor(private gitService:GitService) { 
    this.gitService = gitService
    console.log(this.reponame);
  }

  searchGithubRepo() {
    this.gitService.changeRepo(this.reponame);
    this.gitService.searchGithubRepo().subscribe(
      data => { this.Repo = data['items'];
    }
    )
  }

  ngOnInit(): void {
    this.gitService.searchGithubRepo().subscribe(
      data => {
        this.Repo = data['items'];
        console.log(this.Repo);
      }
    )
  }

}
