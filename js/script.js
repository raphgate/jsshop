class ProductContainer {
  constructor(image, name, price, description) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

class Products {
  total = [];
  constructor() {
    // this.displayItems();
  }
  products = [
    new ProductContainer("./img/boots.jpg", "Boots", 22, "bla blah"),
    new ProductContainer("./img/jersey.jpg", "Jerseys", 44, "bla blah"),
    new ProductContainer("./img/gloves.jpg", "Gloves", 56, "bla blah"),
    new ProductContainer("./img/football.jpg", "Football", 98, "bla blah"),
  ];
  displayItems() {
    for (let item of this.products) {
      new eachProduct(item.image, item.name, item.price, item.description);
    }
  }
}
// addToCart() {
//     App.productTotal.bind(this);
//   }
class eachProduct {
  constructor(image, item, price, description) {
    this.image = image;
    this.item = item;
    this.price = price;
    this.description = description;
    this.displayEachProduct();
  }
  addToCart() {
    App.productTotal(this.price);
  }
  displayEachProduct() {
    let row = document.querySelector(".container .row");
    let productCard = document.createElement("div");
    productCard.className = "col-sm-4 text-center";
    productCard.innerHTML = `<div class="card" style="width:100%;"><img class="card-img-top img-thumbnail" src="${this.image}"> <div class="card-body">
      <h5 class="card-title">${this.item}</h5>
      <h5 class="card-title">${this.price}</h5>
      <p class="card-text">${this.description}</p>
      <a href="#" class="btn btn-primary">Add to cart</a>
      <a href="#" class="btn btn-secondary">Cancel</a></div></div>`;
    let button = productCard.querySelector(".btn-primary");
    // let addToCart = new Cart();
    row.appendChild(productCard);
    button.addEventListener("click", this.addToCart.bind(this));
  }

  displayCart(price) {
    // let cart = new Cart();
    // cart.Display(price);
    // let cummTotal = [...this.total];
    // cummTotal.push(price);
    console.log(price);
  }
}

class Cart {
  items = [];
  set setTotal(acc) {
    const navbarTotal = document.getElementById("navbar-brand");
    navbarTotal.style.color = "green";
    this.items = acc;
    navbarTotal.innerHTML = `<h2>Total: ${this.getTotal}</h2>`;
    // console.log(this.getTotal);
  }
  get getTotal() {
    let accummulator = this.items.reduce((acc, val) => {
      return (acc = acc + val);
    }, 0);
    return accummulator;
  }
  constructor() {}

  displayCart(price) {
    const priceAccummulator = [...this.items];
    priceAccummulator.push(price);
    this.setTotal = priceAccummulator;
    // console.log(this.items);
  }
}

class App {
  cart;
  static init() {
    this.cart = new Cart();
    this.products = new Products();
    this.products.displayItems();

    // this.productTotal();
  }
  static productTotal(price) {
    this.cart.displayCart(price);
  }
}
App.init();
