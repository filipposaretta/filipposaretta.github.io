let num = 0;

let counter = document.createElement("h2");
counter.id = "num";
counter.innerHTML = num;

window.onload = function() {
    document.getElementById("add").addEventListener("click", aggiungi);
    document.getElementById("subtract").addEventListener("click", sottrai);
    document.body.childNodes[1].after(counter);
}

function aggiungi() {
    num++;
    document.getElementById("num").innerHTML = num;
}

function sottrai() {
    num--;
    document.getElementById("num").innerHTML = num;
}