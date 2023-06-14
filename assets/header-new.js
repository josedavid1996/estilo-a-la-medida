const $iconHeader = document.querySelector(".icon-menu")
const $navegacion = document.querySelector(".header-new__nav")




$iconHeader.addEventListener("click", () => {
  $navegacion.classList.toggle("is-active")
})