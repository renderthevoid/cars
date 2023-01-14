document.getElementById("main-action").onclick = () => {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

let buttons = document.getElementsByClassName("car-item-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
    
}

document.querySelector("#price-button").onclick = () => {
    if (document.querySelector("#name").value === "") {
        alert("Введите Ваше имя")
    } else if (document.querySelector("#phone").value === "") {
        alert("Введите Ваш телефон")
    } else if (document.querySelector("#auto").value === ""){
        alert("Введите поле автомобиль")
    } else {
        alert("Спасибо мы с Вами свяжемся!  ")
    }
}