class Github{
    constructor(){

        this.client_id ='fc5c5d056ca1d6d00596';
        this.client_secret = 'f57512525f76d4d5f601e72364b17e75e8beead7';
        this.repos_count = 6;  //Quantidade de Repositorios para mostrar.
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
         client_id = ${this.client_id}&client_secret=${this.client_secret}`);

         const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}
         client_id = ${this.client_id}&client_secret=${this.client_secret}`);

         const profile = await profileResponse.json();
         const repos = await repoResponse.json();
         return{
           profile,
           repos

         }
    }
}