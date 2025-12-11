// JavaScript Document
console.log("hi");


var shopButtons = document.querySelectorAll('main section ul li button');

for (let i = 0; i < shopButtons.length; i++) {
  shopButtons[i].onclick = addToShoppingCart;
}

function addToShoppingCart(){
    let shoppingCartAmount = document.querySelector('header ul button span');

    let currentAmount = shoppingCartAmount.innerHTML;
    currentAmount = parseInt(currentAmount);
  
    let newAmount = currentAmount + 1;

    shoppingCartAmount.innerHTML = newAmount;
}

/*  
  Bronnen
  JS - Oefening 3, link: https://codepen.io/shooft/pen/raOpRBm
*/ 