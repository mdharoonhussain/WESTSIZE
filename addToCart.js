let parentDiv2 = document.querySelector(".container2");
console.log(parentDiv2);
let orderTotal = document.getElementById("total");
let itemsTotal = document.getElementById("items");
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
// displayProducts(cartData);
function displayProducts(data) {
  parentDiv2.innerHTML = "";
  itemsTotal.textContent = cartData.length;
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
    // addToCart(buttonEl, ele);
    let Increment = document.createElement("button");
    let Decrement = document.createElement("button");
    let quantity = document.createElement("span");
    Increment.innerText = "+";
    Decrement.innerText = "-";
    quantity.textContent = ele.quantity;
    let Remove = document.createElement("button");
    Remove.innerText = "Remove";
    Remove.addEventListener("click", () => {
      cartData = cartData.filter((ele1) => {
        return ele1.id !== ele.id;
      });
      localStorage.setItem("cart", JSON.stringify(cartData));
      displayProducts(cartData);
    });
    Increment.addEventListener("click", () => {
      ele = ele.quantity++;
      localStorage.setItem("cart", JSON.stringify(cartData));
      displayProducts(cartData);
    });
    Decrement.addEventListener("click", () => {
      if (ele.quantity > 1) {
        ele = ele.quantity--;
        localStorage.setItem("cart", JSON.stringify(cartData));
        displayProducts(cartData);
      }
    });
    card.append(
      img,
      title,
      price,
      rating,
      Increment,
      Decrement,
      quantity,
      Remove
    );
    parentDiv2.append(card);
  });
  let sum = 0;
  for (let i = 0; i < cartData.length; i++) {
    sum += cartData[i].price * cartData[i].quantity;
  }
  orderTotal.textContent = sum;
}
window.addEventListener("load", () => {
  displayProducts(cartData);
});

let buttonPay = document.getElementById("btn");

buttonPay.addEventListener("click", () => {
  alert(" Hurray ! Payment Successfully Done");
});
