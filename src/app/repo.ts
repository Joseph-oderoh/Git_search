export class Repo {

    constructor (name: string,description: string,full_name: string,created_at: Date){
        this.name =name,
        this.description = description,
        this.full_name =  full_name,
         this.created_at = created_at
    }
    name: string;
    description: string;
    full_name: string;
    created_at: Date;
}

   
 