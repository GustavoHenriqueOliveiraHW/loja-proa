    const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const turma = document.getElementById("turma")
const senha = document.getElementById("senha")
const confirmarSenha = document.getElementById("validar-senha")
const form = document.getElementById("form");

class User{
    constructor(nome, idade, turma, senha){
        this.nome = nome;
        this.idade = idade;
        this.turma = turma;
        this.senha = senha;
    }
}

const message = document.createElement("p");
message.id = "message";
document.querySelector("main").append(message);

// turmas = ["1°Info","2°Info","Meca"];
form.addEventListener("submit",function(e){
    e.preventDefault();
   const hasNumberRegex = /\d/;
    if(hasNumberRegex.test(nome.value)){
        message.textContent = "Nome não pode conter números";
        return; 
    }
    if(nome.value === ""){
        message.textContent = "Nome não pode ser vazio";
        return;
    }
    if(idade.value <= 0){
        message.textContent = "Idade tem de ser positiva";
        return;
    }
    if(turma.value === null){
        message.textContent = "Selecione uma turma";
        return;
    }
    if(senha.value === ""){
        message.textContent = "Senha não pode ser vazia";
    }
    if(senha.value !== confirmarSenha.value){
       message.textContent = "Confirmar senha tem de ser igual à senha"; 
    }
    else{
        message.textContent = "";
        const user = new User(nome.value, idade.value, turma.value, senha.value);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "index.html";
    }
    
})






const n = document.getElementById("idade")
n.addEventListener("wheel",function(event)
{
event.preventDefault();
const step = parseFloat(n.step) || 1;
const currentValue = parseFloat(n.value) || 0;
if(event.deltaY < 0){
n.value = currentValue + step;
}
else{
n.value = currentValue - step;
}
n.dispatchEvent(new Event("input"));
}
)
