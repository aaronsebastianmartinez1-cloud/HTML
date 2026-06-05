const modal = document.getElementById("modal");

const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");
const btn = document.getElementById("modalBtn");

const weeks = {
    1: { title: "Semana 1", text: "HTML básico y estructura web.", link: "Semana 1.html" },
    2: { title: "Semana 2", text: "CSS básico y estilos.", link: "Semana 2.html" },
    3: { title: "Semana 3", text: "Flexbox y responsive.", link: "Semana 3.html" },
    4: { title: "Semana 4", text: "Maquetación web.", link: "Semana 4.html" },
    5: { title: "Semana 5", text: "Introducción a JavaScript.", link: "Semana 5.html" }
};

let currentLink = "";

function openModal(week){
    modal.style.display = "flex";
    title.innerText = weeks[week].title;
    text.innerText = weeks[week].text;
    currentLink = weeks[week].link;
}

function closeModal(){
    modal.style.display = "none";
}

btn.onclick = function(){
    window.location.href = currentLink;
}

window.onclick = function(e){
    if(e.target === modal){
        modal.style.display = "none";
    }
}
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "🌙";
    }else{
        themeBtn.innerHTML = "☀️";
    }

});