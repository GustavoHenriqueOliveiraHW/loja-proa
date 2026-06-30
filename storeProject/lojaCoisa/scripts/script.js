const searchInput = document.querySelector("#search-container > input");
const produtosGrid = document.getElementById("produtos");
const toggleDisplayAllProducts = document.getElementById("mostrar-botao");
let mostrarTudo = false;
const PRODUTOS_BASE = 6;
let atualListaProdutos = [];
let PRODUTOS;

async function fetchProdutos(){
    try{
const res = await fetch('produtos.json');
        if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
    }
    catch(error){
          console.error("Falha em carregar os produtos—", error);
       return JSON.parse(document.getElementById("produtos-reserva-json").textContent);
    }
};



function criarProdutos(produtos) {
    atualListaProdutos = produtos;
      if (produtos.length === 0) {
          produtosGrid.innerHTML = '';
        toggleDisplayAllProducts.classList.add("esconder");
        const message = document.createElement('p');
        message.textContent = 'Não foi achado nada';
        produtosGrid.appendChild(message);
        return;
      }
     const fragment = document.createDocumentFragment();
    function criarProduto(produto){
    const a = document.createElement('a');
    a.className = 'produto';
    a.href = `produto.html?id=${produto.id}`;
    const img = document.createElement('img');
    img.src = produto.image;
    img.alt = produto.name;

    const name = document.createElement('p');
    name.textContent = produto.name;
        
    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `R$ ${produto.price.toFixed(2)}`;

    a.append(img, name, price);
    fragment.appendChild(a);
  };
    const maisProdutos = !mostrarTudo && produtos.length > PRODUTOS_BASE;
       if(!maisProdutos){
      toggleDisplayAllProducts.classList.add("esconder");
       }
       else{
           toggleDisplayAllProducts.classList.remove("esconder");
           toggleDisplayAllProducts.textContent = `Mostrar todos os ${produtos.length} resultados`;
       }
    const produtosVisiveis = mostrarTudo ? produtos : produtos.slice(0, PRODUTOS_BASE);
    produtosVisiveis.forEach((produto)=>{
      criarProduto(produto);
    })
    produtosGrid.innerHTML = '';
  produtosGrid.appendChild(fragment);
}

toggleDisplayAllProducts.addEventListener("click", () => {
    mostrarTudo = true;
    criarProdutos(atualListaProdutos);
});

function searchProdutos(produtos, queryDigitado) {
    mostrarTudo = false;
  const query = queryDigitado.trim().toLowerCase();
  if (!query) return produtos;

  return produtos
    .map(produto => {
      const name = produto.name.toLowerCase();
      let score = -1;
      if (name === query) score = 3;        
      else if (name.startsWith(query)) score = 2;
      else if (name.includes(query)) score = 1;   
      return { produto, score };
    })
    .filter(({ score }) => score > -1)
    .sort((a, b) => b.score - a.score)
    .map(({ produto }) => produto);
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

(function () {
    if (!searchInput) return;
    searchInput.addEventListener("keydown", (e)=>{
            if (e.key === "Enter"){
                searchInput.blur();
            }
    });
    if(produtosGrid) return;
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = encodeURIComponent(searchInput.value.trim());
      window.location.href = `index.html?q=${q}`;
    }
  });
})();



