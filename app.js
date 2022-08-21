const left = document.querySelector(".split.left")
const right = document.querySelector(".split.right")
const container =document.querySelector(".container")
const baslık = document.getElementsByTagName("h1")
const btn = document.querySelectorAll(".btn")
left.addEventListener("mouseenter", ()=>{
    container.classList.add("hover-left")
    baslık[1].classList.add("h1duzen")
    btn[1].classList.add("btnduzen")
})
left.addEventListener("mouseleave", ()=>{
    container.classList.remove("hover-left")
    baslık[1].classList.remove("h1duzen")
    btn[1].classList.remove("btnduzen")
})
right.addEventListener("mouseenter", ()=>{
    container.classList.add("hover-right")
    baslık[0].classList.add("h1duzen")
    btn[0].classList.add("btnduzen")
})
right.addEventListener("mouseleave", ()=>{
    container.classList.remove("hover-right")
    baslık[0].classList.remove("h1duzen")
    btn[0].classList.remove("btnduzen")
})
