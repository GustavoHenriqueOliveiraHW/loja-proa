async function init() {
      const params = new URLSearchParams(window.location.search);
      const produtoId = Number(params.get('id'));

      const produtos = await fetchProdutos();
      const produto = produtos.find(p => p.id === produtoId);

      const conteudo = document.querySelector('#produtoDisplay > div');

      if (!produto) {
        const p = document.createElement("p");
        p.textContent = "produto não encontrado.";
        p.id = "nao-encontrado";
        conteudo.appendChild(p);
      }
  else {
    document.title = produto.name;
    const img = document.createElement('img');
    img.src = produto.image;
    img.alt = produto.name;
    img.addEventListener("click", ()=> {img.animate(
    [
    {
      transform: "scale(1)"
    },
    {
      transform: "scale(1.5)"
    }
    ],
    {
      duration: 500,
      fill: "backwards"
    }
    )})
    const div = document.createElement("div");
    div.appendChild(img);
    div.id = "image-container";
    const nome = document.createElement('h1')
    nome.textContent = produto.name;
    
    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `R$ ${produto.price.toFixed(2)}`;

    const descricao = document.createElement('p');
    descricao.textContent = produto.description;
    
    conteudo.append(div, nome, price, descricao);
    }
}
window.addEventListener("load",init());
const carrinhoButton = document.getElementById("carrinhoButton");
carrinhoButton.addEventListener("click", ()=>{
  carrinhoButton.push()
})