let date_now = document.querySelector(".date-now");
var time_now = new Date().toLocaleTimeString().slice(0, -3);
date_now.innerHTML = "Сейчас " + time_now;


var dateNow = new Date();

const months = { 0: " янв", 1: " фев", 2: " мар", 3: " апр", 4: " май", 5: " июн", 6: " июл", 7: " авг", 8: " сен", 9: " окт", 10: " ноя", 11: " дек" }
const week = { 0: "вс", 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб" }

let tendays_date = document.querySelectorAll(".date-tendays");

dateNow = new Date();

for (let i = 0; i < tendays_date.length; i++) {

    tendays_date[i].innerHTML = dateNow.getDate() + months[dateNow.getMonth()];
    dateNow.setDate(dateNow.getDate() + 1);
}


dateNow = new Date();
let dayWeek = document.querySelector(".day-card-number");
dayWeek.innerHTML = dateNow.getDate();
dayWeek = document.querySelector(".day-card-number1");
dateNow.setDate(dateNow.getDate() + 1);
dayWeek.innerHTML = dateNow.getDate();

let dateOfWeek = document.querySelectorAll(".day-card-number2");
let dayOfWeek = document.querySelectorAll(".day-of-week");

for (let i = 0; i < dateOfWeek.length; i++) {
    dateNow.setDate(dateNow.getDate() + 1);
    dateOfWeek[i].innerHTML = dateNow.getDate();
    dayOfWeek[i].innerHTML = week[dateNow.getDay()];
}


const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();

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