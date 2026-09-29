 const nomeLogin = document.getElementById("nomeLogin");
const senhaLogin = document.getElementById("senhaLogin")
const formLogin = document.getElementById("formLogin");

const message = document.createElement("p");
message.id = "message";

document.querySelector("main").append(message);

// turmas = ["1°Info","2°Info","Meca"];
formLogin.addEventListener("submitLogin",function(e){
    e.preventDefault();
       const nome = nomeLogin.value.trim();
    const senha = senhaLogin.value;

    // Verifica se o nome foi preenchido
    if (nome === "") {
        message.textContent = "Nome de usuário não pode ser vazio";
        return;
    }

    // Verifica se a senha foi preenchida
    if (senha === "") {
        message.textContent = "Senha não pode ser vazia";
        return;
    }

    // Pega o usuário cadastrado
    const usuarioSalvo = localStorage.getItem("user");

    // Verifica se existe usuário
    if (usuarioSalvo === null) {
        message.textContent = "Nenhum usuário cadastrado";
        return;
    }

    // Transforma o JSON novamente em objeto
    const usuario = JSON.parse(usuarioSalvo);

    // Compara nome e senha
    if (nome === usuario.nome && senha === usuario.senha) {

        message.textContent = "Login realizado com sucesso!";

        // Marca o usuário como logado
        localStorage.setItem("logado", "true");

        // Vai para a página inicial
        window.location.href = "inicio.html";

    } else {
        message.textContent = "Nome ou senha incorretos";
    }
});
