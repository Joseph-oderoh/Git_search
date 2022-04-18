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
  repository: any

  constructor(private gitService:GitService) { 
    // this.reponame = `${this.gitService.reponame}`
    console.log(this.reponame);
    this.gitService = gitService

  }

  Repo() {
    this.gitService.changeRepo(this.reponame);
    this.gitService.searchGithubRepos().subscribe(
      data => { this.repository = data['items'];
    }
    )
  }

  ngOnInit(): void {
    this.gitService.searchGithubRepos().subscribe(
      data => {
        this.repository = data['items'];
        console.log(this.repository);
      }
    )
  }

}
