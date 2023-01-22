let cartBtn = document.querySelector(".btn");

let parentDiv = document.querySelector("#container");
let allProductData = JSON.parse(localStorage.getItem("product")) || [];
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let url = "https://fakestoreapi.com/products";

async function fetchData(url) {
  try {
    let res = await fetch(url);
    res = await res.json();
    console.log(res);
    allProductData = res;
    localStorage.setItem("product", JSON.stringify(allProductData));
    displayProducts(allProductData);
  } catch (error) {
    console.log(error);
  }
}
console.log("url");

window.addEventListener("load", () => {
  fetchData(url);
});

function displayProducts(data) {
  parentDiv.innerHTML = "";
  data.forEach((ele, index) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    const img = document.createElement("img");
    img.setAttribute("src", ele.image);
    const title = document.createElement("h2");
    title.textContent = ele.title;
    const price = document.createElement("p");
    price.innerText = ele.price;
    const rating = document.createElement("p");
    rating.innerText = ele.rating.rate;
    const buttonEl = document.createElement("button");
    buttonEl.innerText = "Add To Cart";
    addToCart(buttonEl, ele);
    card.append(img, title, price, rating, buttonEl);
    parentDiv.append(card);
  });
}

function addToCart(buttonEl, ele) {
  console.log("inside cart");
  buttonEl.addEventListener("click", () => {
    console.log("inside cart button");
    if (cartData.length > 0) {
      let flag = true;
      cartData.forEach((obj) => {
        if (obj.id === ele.id) {
          alert("Product Already In Cart");
          flag = false;
        }
      });
      if (flag) {
        ele.quantity = 1;
        cartData.push(ele);
        localStorage.setItem("cart", JSON.stringify(cartData));
        alert("Successfully Placed");
      }
    } else {
      ele.quantity = 1;
      cartData.push(ele);
      localStorage.setItem("cart", JSON.stringify(cartData));
      alert("Succefully Placed");
    }
  });
}
