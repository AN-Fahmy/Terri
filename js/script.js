let loader = document.querySelector(".loader");

function load(){
    loader.classList.add("fade-out");
};
function fadeOut(){
    setInterval(load, 5200);
};

window.onload = fadeOut;
