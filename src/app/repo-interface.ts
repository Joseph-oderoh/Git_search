export interface RepoInterface {
    // name: string;
    // description: string;
    // full_name: string;
    // created_at: Date;
    name:string,
    login: string;
    html_url:string;
    location:string;
    description:string
    public_repos:number;
    followers:number;
    following:number;
    forks: number
    avatar_url:string
}
