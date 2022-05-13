
function addProduto(produto) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const main = document.createElement("main");
  const h1 = document.createElement("h1");
  const h5 = document.createElement("h5");
  const strong = document.createElement("strong");

  li.className = "product";
  main.className = "product-main";
  h1.className = "product-title";
  h5.className = "product-category";
  strong.className = "product-price";

  img.src = produto.image;
  if (produto.image == undefined) {
    img.src = "img/products/no-img.svg";
  }
  img.alt = produto.title;
  img.title = produto.title;
  img.className = "product-img";

  h1.innerText = produto.title;
  h5.innerText = produto.category;
  strong.innerText = `R$ ${produto.price}`;
  imageDescription = produto.title;

  li.appendChild(img);
  li.appendChild(main);
  main.appendChild(h1);
  main.appendChild(h5);
  main.appendChild(strong);

  return li
}
const mainFrutas = document.querySelector(".products-content-fruits");
const mainDrinks = document.querySelector(".products-content-drinks");
const mainHigiene = document.querySelector(".products-content-hygiene");

const ulFrutas = document.createElement("ul");
const ulDrinks = document.createElement("ul");
const ulHigiene = document.createElement("ul");

function addNovoProd(produtos) {

  produtos.forEach(produto=> {
    const adicionarProduto = addProduto(produto);
      if (produto.category == "Frutas") {
        document
          .getElementsByClassName("products-content-fruits")[0]
          .appendChild(adicionarProduto);
          ulFrutas.appendChild(adicionarProduto)
          mainFrutas.appendChild(ulFrutas)
      }
      if (produto.category == "Bebidas") {
        document
          .getElementsByClassName("products-content-drinks")[0]
          .appendChild(adicionarProduto);
          ulDrinks.appendChild(adicionarProduto)
           mainDrinks.appendChild(ulDrinks)
      }
      if (produto.category == "Higiene") {
        document
          .getElementsByClassName("products-content-hygiene")[0]
          .appendChild(adicionarProduto);
          ulHigiene.appendChild(adicionarProduto)
           mainHigiene.appendChild(ulHigiene)
      }
  });
}
addNovoProd(products);


