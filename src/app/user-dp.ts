export class UserDp {
        constructor(name: string,  html_url: string, description: string, public_repos: number, followers: number, following:number){
            this.name = name
            this.html_url = html_url
            this.description = description
            this.public_repos = public_repos
            this.followers = followers
            this.following = following
        }
        name:string
        html_url:string;
        description:string
        public_repos:number;
        followers:number;
        following:number;
    }

