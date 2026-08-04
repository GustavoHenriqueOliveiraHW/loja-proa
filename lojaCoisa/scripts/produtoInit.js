async function init() {
      const params = new URLSearchParams(window.location.search);
      const produtoId = Number(params.get('id'));
      const produtos = await fetchProdutos();
      const produto = produtos.find(p => p.id === produtoId);

      const carrinhoAddButton = document.getElementById("add-carrinho-button");
      const quantidade = document.getElementById("quantidade-produto");
      quantidade.addEventListener("focusout", ()=>{
        if(quantidade.value < 0){
          quantidade.value = 1;
        }
      })
      carrinhoAddButton.addEventListener("click", ()=>{
        pedidoInstanceCarrinho = carrinho.find(p => p.id === produto.id);
        if(!pedidoInstanceCarrinho){
        const pedido = {...produto, quantity: quantidade.valueAsNumber};
      carrinho.push(pedido);
        }
        else{
          pedidoInstanceCarrinho.quantity += quantidade.valueAsNumber;
        }
      console.log(carrinho);
      })

  
      const conteudo = document.querySelector('#produto-display > div');

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
    const imageDiv = document.createElement("div");
    imageDiv.appendChild(img);
    imageDiv.id = "image-container";

    const textDiv = document.createElement("div")
    textDiv.id = "text-container";

    const nome = document.createElement('h1')
    nome.textContent = produto.name;
    
    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `R$ ${produto.price.toFixed(2)}`;

    const descricao = document.createElement('p');
    descricao.textContent = produto.description;

    textDiv.appendChild(nome);
    textDiv.appendChild(price);
    textDiv.appendChild(descricao);

    conteudo.append(imageDiv, textDiv);
    }
}
window.addEventListener("load",init());
