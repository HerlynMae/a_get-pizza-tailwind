<script>
const products = document.querySelectorAll(".menu__item--wrap");
const cart = document.querySelector(".cart__view");
const cartIcon = document.querySelector(".cart__icon");

cartIcon.addEventListener("click", () => cart.classList.toggle("show"));

products.addEventListener("click", buyProducts);
cart.addEventListener("click", removeToCart);

function buyProducts(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    const product = e.target.parentElement.parentElement;

    const productInfo = {
      image: product.querySelector("img").src,
      title: product.querySelector("h4").textContent,
      price: product.querySelector("ul li:last-child").textContent,
    };

    addToCart(productInfo);
  }
}

function addToCart(productsItem) {
  const viewCart = document.querySelector(".cart__view");
  const div = document.createElement("div");
  div.classList = "cart__item";

  div.innerHTML = `
          <img src="${productsItem.image}" alt="">
          <div class="cart__info">
              <h3>${productsItem.title}</h3>
              <p>${productsItem.price}</p>
              <span class="remove__item">x</span>
          </div>
      `;
  viewCart.appendChild(div);
}

function removeToCart(e) {
  if (e.target.classList.contains("remove__item")) {
    e.target.parentElement.parentElement.remove();
  }
}

</script>