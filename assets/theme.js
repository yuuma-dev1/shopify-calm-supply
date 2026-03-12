document.addEventListener("DOMContentLoaded", function(){

const buttons = document.querySelectorAll(".add-cart")

buttons.forEach(btn=>{
btn.addEventListener("click",()=>{
console.log("Add to cart")
})
})

})