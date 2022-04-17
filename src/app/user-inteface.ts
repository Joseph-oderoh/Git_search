export interface UserInteface {

    name:string,
    login: string;
    html_url:string;
    location:string
    public_repos:number;
    followers:number;
    following:number;
}
export class User{
    constructor(name: string, login: string, html_url: string, location: string, public_repos: number, followers: number, following:number){
        this.name = name
        this.login = login
        this.html_url = html_url
        this.location = location
        this.public_repos = public_repos
        this.followers = followers
        this.following = following
    }
    name:string;
    login: string;
    html_url:string;
    location:string
    public_repos:number;
    followers:number;
    following:number;
}
