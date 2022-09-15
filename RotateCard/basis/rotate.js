const card = document.querySelector(".card");

card.addEventListener("mouseenter",e=>{
    card.style.animation = "rotate 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)";
})

card.addEventListener("mouseleave",e=>{
    card.style.animation = "rotate-r 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)";
})