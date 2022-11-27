//Começar gitHub
var paso = false;
const github = new Github;

// Começar UI
const ui = new UI;

if (paso === false) {
    var paso = true;
    MeuPerfil();
   }
      

//Pesquisa de entrada
const LimparCaixadeBusqueda = document.getElementById('searchUser').textContent = " "; //Limpa caixa de busqueda quando recarga a página.
const searchUser  = document.getElementById('searchUser');

//ouvinte de evento de entrada de pesquisa
searchUser.addEventListener('keyup',(e)=>{

    //obter texto de entrada
   const userText = e.target.value;

    if(userText !== ''){
        //Fazer chamada http
        github.getUser(userText)
        .then(data =>{
          if(data.profile.message === 'Não encontrado'){
         //Mostrar messagem de Alerta
             ui.showAlert('Usuário não encontrado', 'alert alert-danger');
          }else{
              //Mostrar o Perfil
              ui.showProfile(data.profile);
              ui.showRepos(data.repos);

          }

        })

    } else{
        //Sim usuario nao insira nada, mostrar meu Perfil
        MeuPerfil();
    }
});

function MeuPerfil() {
        github.getUser('Yublithze27')
        .then(data =>{
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);})
}