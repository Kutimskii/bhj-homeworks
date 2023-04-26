const productsControl = [...document.querySelectorAll(".product__quantity-control")]
const productsAdd = [...document.querySelectorAll(".product__add")]
const cartProducts = document.querySelector(".cart__products")

productsAdd.forEach(element => {
  element.addEventListener("click", addProducts)
})
productsControl.forEach(element => {
  element.addEventListener("click", quantityProducts)
})
function quantityProducts (event) {
  let quantityValue = event.srcElement.closest(".product__quantity-controls").querySelector(".product__quantity-value");
  if (event.srcElement.classList.contains("product__quantity-control_dec") && quantityValue.innerText === "1") {
    quantityValue.innerHTML = 1;
 } else if (event.srcElement.classList.contains("product__quantity-control_inc")) {
    quantityValue.innerHTML = Number(quantityValue.innerHTML) + 1;
 } else if (event.srcElement.classList.contains("product__quantity-control_dec")) {
    quantityValue.innerHTML = Number(quantityValue.innerHTML) - 1;
 }
}
function addProducts (event) {
  let quantityValue = event.srcElement.closest(".product__quantity").querySelector(".product__quantity-value");
  let dataId = event.srcElement.closest(".product").dataset.id
  if (cartProducts.querySelector(`[data-id='${dataId}']`)) {
    let carProductCount = cartProducts.querySelector(`[data-id='${dataId}']`).querySelector(".cart__product-count")
    carProductCount.innerHTML = Number(carProductCount.innerHTML) + Number(quantityValue.innerHTML)
    return
  }
  cartProducts.innerHTML += `
    <div class="cart__product" data-id=${event.srcElement.closest(".product").dataset.id}>
    <img class="cart__product-image" src=${event.srcElement.closest(".product").querySelector(".product__image").src}>
    <div class="cart__product-count">${Number(quantityValue.innerHTML)}</div>
</div>`

}