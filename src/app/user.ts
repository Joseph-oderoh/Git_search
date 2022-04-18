    export class User{
        constructor(name: string, login: string, html_url: string, description: string,company:string, created_at:Date, public_repos: number, followers: number, following:number){
            this.name = name
            this.login = login
            this.html_url = html_url
            this.description = description
            this.public_repos = public_repos
            this.followers = followers
            this.following = following
            this.company =  company
            this.created_at = created_at
        }
        name:string
        login: string;
        html_url:string;
        description:string
        public_repos:number;
        followers:number;
        following:number;
        company:string
        created_at:Date
    }
    
