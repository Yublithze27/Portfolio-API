class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
      this.profile.innerHTML =`
         <div class="card card-body mb-3">
          <div class="row">
          <div class="col-md-3">
           <img class="img-fluid mb-2" src="${user.avatar_url}">
           <h4><span>${user.name}</span></h4>
           <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"><strong><em>Ver Perfil em GitHub</em></strong></a>      
          </div>

        <div class="col-md-9">
           <span class="badge badge-primary">Repositorios Públicos: ${user.public_repos}</span>
           <span class="badge badge-secondary">Gists Públicos: ${user.public_gists}</span>
           <span class="badge badge-success">Seguidores: ${user.public_followers}</span>
           <span class="badge badge-primary">Seguindo : ${user.public_following}</span>
           <br><br>
           <ul class="list-group">
             <li class="list-group-item">Companhia: ${user.company}</li> 
             <li class="list-group-item">Website/Blog: ${user.blog}</li> 
             <li class="list-group-item">Localização: ${user.location}</li> 
             <li class="list-group-item">Membro desde: ${user.created_at}</li> 
          </ul>
     </div>
    </div>
  </div>

  <h3 class="page-heading mb-3">Últimos Repositorios</h3>
  <div id="repos"><div>
      `;
    }

    //Mostrar repositórios do usuário
    showRepos(repos){
      let output = '';
      repos.forEach(function(repo){
       output += `
        <div class="card card-body mb-2">
          <div class="row">
          <div class="col-md-6">
           <a href="${repo.html_url}" target="_blank">${repo.name}</a>      
          </div>

          <div class="col-md-6">
          <span class="badge badge-primary">Estrelas: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Observadores: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forms_count}</span>
          </div>
         </div>
        </div>
       `;
      });
      
      //Repositórios de saída
      document.getElementById('repos').innerHTML = output;
    }
    //Mostrar mensagem de alerta
    showAlert(message, className){
    // Limpar qualquer alerta restante
     this.clearAlert();
    //Criar div
      const div = document.createElement('div');
      //Adicionar classes
      div.className = className;
      //Adicionar messagem
      div.appendChild(document.createTextNode(message));
      //Obter pai
      const container = document.querySelector('.searchContainer');
      //Obter caixa de búsqueda
      const search = document.querySelector('.search');
      //Inserir alerta
     container.insertBefore(div, search);
     //Tempo limite após 3 segundos
     setTimeout(() => {
      this.clearAlert();
      }, 3000);

    }
    //Limpar messagem de alerta 
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert){
            currentAlert.remove();
        }
    }
    //Limpar Perfil
    clearProfile(){
      this.profile.innerHTML = '';
    }
}