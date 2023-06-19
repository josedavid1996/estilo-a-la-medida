const $mujer = document.getElementById("mujer")
const $hombre = document.getElementById("hombre")
const $joyeria = document.getElementById("joyeria")

const $listProductsHombre = document.getElementById("list-products-hombre")
const $listProductsMujer = document.getElementById("list-products-mujer")
const $listProductsJoyeria = document.getElementById("list-products-joyeria")



const handleClick = (item) => {
  const isActive = document.querySelectorAll(".is-active-title")
  isActive.forEach(item => item.classList.remove("is-active-title"))
  item.classList.add("is-active-title")

  if (item.id === "hombre") {
    $listProductsHombre.classList.remove("is-active-card")
    $listProductsMujer.classList.add("is-active-card")
    $listProductsJoyeria.classList.add("is-active-card")
  }
  if (item.id === "joyeria") {
    $listProductsJoyeria.classList.remove("is-active-card")
    $listProductsMujer.classList.add("is-active-card")
    $listProductsHombre.classList.add("is-active-card")
  }
  if (item.id === "mujer") {
    $listProductsMujer.classList.remove("is-active-card")
    $listProductsJoyeria.classList.add("is-active-card")
    $listProductsHombre.classList.add("is-active-card")
  }
}

$mujer.addEventListener("click", () => {
  handleClick($mujer)
})
$hombre.addEventListener("click", () => {
  handleClick($hombre)
})
$joyeria.addEventListener("click", () => {
  handleClick($joyeria)
})



