var cart = [
  
  
  
  ];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 // write your code here
 
 const price = Math.floor(Math.random() * 100)
 cart.push({ [item]: price })
 console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
   let itemAndPrice = cart[i]
   let item = Object.keys(itemAndPrice)[0]
-    let price = itemAndPrice[item]
-
-    itemsAndPrices.push(`${item} at \$${price}`)
-  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}