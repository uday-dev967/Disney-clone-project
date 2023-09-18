const loginButton = document.getElementById("loginBtn");
const homePage = document.getElementById("home");
// initially home page is hidden

homePage.classList.add("hide");
const mainPage = document.getElementById("main");
const logoutButton = document.getElementById("logoutBtn");

// carousel slider elements
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
let firstCardWidth;
const arrowBtns = wrapper.querySelectorAll("button");
console.log(firstCardWidth);

const carouselChildrens = [...carousel.children];

// login and logout functions
loginButton.addEventListener("click", login);
logoutButton.addEventListener("click", logout);
function login() {
  alert("login clicked");
  homePage.classList.remove("hide");
  mainPage.classList.add("hide");
}

function logout() {
  alert("logout clicked");
  homePage.classList.add("hide");
  mainPage.classList.remove("hide");
}

// carousel slider buttons working funtion
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    firstCardWidth = document.querySelector(".card").offsetWidth;
    console.log(btn.id);
    console.log(firstCardWidth);
    carousel.scrollLeft += btn.id == "prev" ? -firstCardWidth : firstCardWidth;
  });
});
