let hamburger = document.querySelector('.hamburger')
let anchor = document.querySelector('.anchor')
hamburger.addEventListener('click',()=>{
    anchor.classList.toggle('show')
})