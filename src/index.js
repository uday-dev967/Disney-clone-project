const loginButton = document.getElementById("loginBtn");
const homePage = document.getElementById("home");
homePage.classList.add("hide");
const mainPage = document.getElementById("main");
const logoutButton = document.getElementById("logoutBtn");
const sliderMain = document.getElementById("slider-main");
const items = document.getElementsByClassName("slider-item");
const firstItem = items[0];
const lastItem = items[items.length - 1];
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

function next() {
  if (lastItem !== items[4]) sliderMain.append(items[0]);
}

function prev() {
  if (items[items.length - 1] !== lastItem) {
    sliderMain.prepend(items[items.length - 1]);
  }
}
