
// turmas = ["1°Info","2°Info","Meca"];
document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const turma = document.getElementById("turma")
const senha = document.getElementById("senha")
const confirmar_senha = document.getElementById("validar-senha")

   const hasNumberRegex = /\d/;
    if(hasNumberRegex.test(nome.value)){
        const h1 = document.createElement("p")
        h1.textContent = "Nome não pode conter números";
        document.querySelector("main").append(h1);
        return;
    }
    if(nome.value === ""){
        const h1 = document.createElement("p")
        h1.textContent = "Nome não pode ser vazio";
        document.querySelector("main").append(h1);
        return;
    };
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
