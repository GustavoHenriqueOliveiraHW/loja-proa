const showCarrinho = document.getElementById("show-carrinho");
showCarrinho.addEventListener("click", function(){
const carrinhoWrapper = document.createElement("div");
carrinhoWrapper.id ="container-carrinho";

const exit = document.createElement("p");
exit.textContent = "X";
exit.addEventListener("click", ()=>{
  carrinhoWrapper.classList.remove("ativado");
  carrinhoWrapper.addEventListener("transitionend",()=>
    {
    carrinhoWrapper.remove();
    },{once: true}
  )
})
carrinhoWrapper.appendChild(exit);

  carrinho.forEach((item)=>{
    const carrinhoItem = document.createElement("div");
    carrinhoItem.classList.add("carrinho-item");

    const img = document.createElement("img");
    img.src = item.image;
    img.classList.add("img-produto-carrinho");
    carrinhoItem.appendChild(img);

    const p = document.createElement("p");
    p.textContent = item.name;
    carrinhoItem.appendChild(p);

    const quantity = document.createElement("p");
    quantity.textContent = `Quantidade: ${item.quantity}`;

    carrinhoItem.appendChild(quantity);
    carrinhoWrapper.appendChild(carrinhoItem);
    
    })
    document.querySelector("body").appendChild(carrinhoWrapper);
        requestAnimationFrame(() => {
        carrinhoWrapper.classList.add("ativado");
    });
     
})

