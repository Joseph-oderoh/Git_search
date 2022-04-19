import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  reponame!: string
  GitRepo: any

  constructor(private gitService:GitService) { 
    // this.reponame = `${this.gitService.reponame}`
    this.gitService = gitService
    console.log(this.reponame);
    

  }

  searchGithubRepo() {
    this.gitService.changeRepo(this.reponame);
    this.gitService.searchGithubRepo().subscribe(
      data => { this.GitRepo = data['items'];
    }
    )
  }

  ngOnInit(): void {
    this.gitService.searchGithubRepo().subscribe(
      data => {
        this.GitRepo = data['items'];
        console.log(this.GitRepo);
      }
    )
  }

}
