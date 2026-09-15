

const showCarrinho = document.getElementById("show-carrinho");
showCarrinho.addEventListener("click", function(){
  const carrinhoWrapper = document.createElement("div");
  carrinhoWrapper.id ="container-carrinho";
  carrinho.forEach((item)=>{
    const carrinhoItem = document.createElement("div");
    carrinhoItem.classList.add("carrinho-item")
    const img = document.createElement("img");
    img.src = item.image;
    img.classList.add("img-produto-carrinho")
    carrinhoItem.appendChild(img);
    const p = document.createElement("p");
    p.textContent = item.name;
    carrinhoItem.appendChild(p);
    const description = document.createElement("p") ;
    description.textContent = item.description;
    carrinhoItem.appendChild(description);
    carrinhoWrapper.appendChild(carrinhoItem);
    document.querySelector("main").appendChild(carrinhoWrapper);
    })

        requestAnimationFrame(() => {
        carrinhoWrapper.classList.add("ativado");
    });
     
})

