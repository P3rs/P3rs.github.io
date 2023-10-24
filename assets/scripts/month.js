let matches = document.querySelectorAll("h3.table-date");
let cells = document.querySelectorAll("td");
let date_now = new Date();
let dif;
if (date_now.getDay() == 0) {
    dif = 6;
} else {
    dif = date_now.getDay() - 1;
}

let months = [' января', ' февраля', ' марта', ' апреля', ' мая', ' июня', ' июля', ' августа', ' сентября', ' октября', ' ноября', ' декабря'];


date_now.setDate(date_now.getDate() - dif);
let month = date_now.getMonth();
for (let i = 0; i < matches.length; i++) {
    if (month == date_now.getMonth()) {
        matches[i].innerHTML = date_now.getDate();
    } else {
        matches[i].innerHTML = date_now.getDate() + months[date_now.getMonth()];
    }

    month = date_now.getMonth();
    date_now.setDate(date_now.getDate() + 1);
}

for (let i = 0; i < dif; i++) {
    cells[i].style.opacity = 0.4;
}


const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}