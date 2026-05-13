const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const close = document.querySelector(".close");

btn.onclick = () => {
    modal.style.display = "flex";
}

close.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
}